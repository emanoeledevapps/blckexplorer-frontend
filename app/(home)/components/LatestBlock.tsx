"use client"

import { JSX } from "react";
import { useQuery } from "@tanstack/react-query";
import { getLatestBlock } from "@/services/block/getLatestBlock";
import { hexToDecimal } from "@/utils/hexToDecimal";
import { getBlockByNumber } from "@/services/block/getBlockByNumber";

const refetchInterval = process.env.NEXT_PUBLIC_REFETCH_INTERVAL ? parseInt(process.env.NEXT_PUBLIC_REFETCH_INTERVAL) : 30000

export function LatestBlock(): JSX.Element {
  const { data, isLoading } = useQuery({
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

  console.log(blockData)

  return(
    <div className="flex flex-col gap-1">
      <p className="text-black">Latest block</p>
      
      <div className="rounded-2xl p-3 border w-52 flex flex-col gap-2">
        <p className="font-bold text-2xl">{latestBlock}</p>
        <div className="flex items-center gap-3">
          <p className="text-gray-500">Miner:</p>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-gray-500">Txs:</p>
        </div>
      </div>
    </div>
  )
}
