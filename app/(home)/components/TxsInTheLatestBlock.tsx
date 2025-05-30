"use client"

import { JSX } from "react";
import { useQuery } from "@tanstack/react-query";
import { getLatestBlock } from "@/services/block/getLatestBlock";
import { hexToDecimal } from "@/utils/hexToDecimal";

export function TxsInTheLatestBlock(): JSX.Element {
  const { data } = useQuery({
    queryKey: ['latestBlock'],
    queryFn: getLatestBlock
  })

  let latestBlock = 0

  if (data) {
    const response = hexToDecimal(data.result)
    latestBlock = response
  }

  return(
    <div className="flex flex-col gap-1 w-full">
      <p className="text-black">Txs in block #{latestBlock}</p>
      
    </div>
  )
}
