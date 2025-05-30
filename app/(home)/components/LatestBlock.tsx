"use client"

import { JSX } from "react";
import { useQuery } from "@tanstack/react-query";
import { getLatestBlock } from "@/services/block/getLatestBlock";
import { hexToDecimal } from "@/utils/hexToDecimal";
import { getBlockByNumber } from "@/services/block/getBlockByNumber";
import Link from "next/link";
import { useTimeSince } from "@/hooks/useTimeSince";
import { IconAddress } from "@/components/IconAddress/IconAddress";

const refetchInterval = process.env.NEXT_PUBLIC_REFETCH_INTERVAL ? parseInt(process.env.NEXT_PUBLIC_REFETCH_INTERVAL) : 30000

export function LatestBlock(): JSX.Element {
  const { data } = useQuery({
    queryKey: ['latestBlock'],
    queryFn: getLatestBlock,
    refetchInterval
  })

  const latestBlockHex = data && data.result as string

  const { data: blockData } = useQuery({
    queryKey: ['blockByNumberHex', latestBlockHex],
    queryFn: () => getBlockByNumber(latestBlockHex),
    enabled: !!latestBlockHex
  })

  let latestBlock = 0

  if (data) {
    const response = hexToDecimal(data.result)
    latestBlock = response
  }

  let timestamp = 0

  if (blockData) {
    timestamp = hexToDecimal(blockData?.result?.timestamp)
  }

  const { formatted } = useTimeSince(new Date(timestamp * 1000))

  return(
    <div className="flex flex-col gap-1">
      <p className="text-black">Latest block</p>
      
      <Link 
        className="rounded-2xl p-3 border w-52 flex flex-col gap-2"
        href={`/block/${latestBlock}`}
      >
        <p className="font-bold text-2xl">{latestBlock}</p>
        <div className="flex items-center gap-2">
          <p className="text-gray-500">Miner:</p>
          {blockData && (
            <>
              <IconAddress address={blockData?.result?.miner} size={20}/>
              <p className="text-sm truncate text-ellipsis max-w-[50%]">
                {blockData?.result?.miner}
              </p>
            </>
          )}
        </div>
        <div className="flex items-center gap-3">
          <p className="text-gray-500">Txs:</p>
          <p className="text-sm truncate text-ellipsis">
            {blockData && blockData?.result?.transactions?.length}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-gray-500 text-sm">
            {formatted}
          </p>
        </div>
      </Link>
    </div>
  )
}
