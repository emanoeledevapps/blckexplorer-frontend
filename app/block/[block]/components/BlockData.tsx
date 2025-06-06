/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import { DataItem } from "@/components/DataItem/DataItem"
import { useTimeSince } from "@/hooks/useTimeSince"
import { getBlockByNumber } from "@/services/block/getBlockByNumber"
import { BlockProps } from "@/types/block"
import { decimalToHex } from "@/utils/decimalToHex"
import { hexToDecimal } from "@/utils/hexToDecimal"
import { useQuery } from "@tanstack/react-query"
import { JSX, useEffect, useState } from "react"

interface Props {
  block: string
}
export function BlockData({ block }: Props): JSX.Element {
  const blockHex = decimalToHex(parseInt(block))
  const [timestamp, setTimestamp] = useState<number>(0)
  const { formatted } = useTimeSince(new Date(timestamp * 1000))

  const { data, isLoading, isError } = useQuery({
    queryKey: ['blockByNumberHex', blockHex],
    queryFn: () => getBlockByNumber(blockHex),
    enabled: !!blockHex
  })

  const blockData = data ? data?.result as BlockProps : null

  useEffect(() => {
    if (blockData) {
      setTimestamp(hexToDecimal(blockData?.timestamp))
    }
  }, [blockData])
  
  if (isLoading) {
    return <p>loading data...</p>
  }

  if (isError || !blockData) {
    return <p>Error on get data</p>
  }

  return (
    <div className="flex flex-col gap-3 mt-10">
      <DataItem label="Hash" value={blockData.hash} />
      <DataItem 
        label="Date" 
        value={formatted}
      />
      <DataItem label="Miner" value={blockData.miner} linkToAddress />
      <DataItem label="Parent hash" value={blockData.parentHash} />
      <DataItem label="Gas used" value={hexToDecimal(blockData.gasUsed).toString()} />
      <DataItem label="Gas limit" value={hexToDecimal(blockData.gasLimit).toString()} />
      <DataItem label="Difficulty" value={hexToDecimal(blockData.difficulty).toString()} />
      <DataItem label="Total difficulty" value={hexToDecimal(blockData.totalDifficulty).toString()} />
      <DataItem label="Size" value={hexToDecimal(blockData.size).toString()} />
    </div>
  )
}
