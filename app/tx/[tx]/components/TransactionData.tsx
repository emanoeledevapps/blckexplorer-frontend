"use client"
import { getTransactionData } from "@/services/tx/getTransactionData"
import { TxProps } from "@/types/tx"
import { hexToDecimal } from "@/utils/hexToDecimal"
import { useQuery } from "@tanstack/react-query"
import { JSX } from "react"

interface Props {
  tx: string
}

export function TransactionData({ tx }: Props): JSX.Element {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['txData', tx],
    queryFn: () => getTransactionData(tx),
  })

  const txData = data ? data?.result as TxProps : null

  if (isLoading) {
    return <p>loading data...</p>
  }

  if (isError || !txData) {
    return <p>Error on get data</p>
  }

  return(
    <section className="flex flex-col gap-3 mt-10">
      <DataItem label="Block" value={hexToDecimal(txData.blockNumber).toString()} />
      <DataItem label="From" value={txData.from} />
      <DataItem label="To" value={txData.to} />
      <DataItem label="Value" value={hexToDecimal(txData.value).toString()} />
      <DataItem label="Gas" value={hexToDecimal(txData.gas).toString()} />
      <DataItem label="Gas price" value={hexToDecimal(txData.gasPrice).toString()} />
      <DataItem label="Input" value={txData.input} />

    </section>
  )
}

interface DataItemProps {
  label: string
  value: string
}
function DataItem({ label, value }: DataItemProps): JSX.Element {
  return (
    <div className="flex items-center gap-2">
      <p className="text-gray-500">{label}:</p>
      <p>{value}</p>
    </div>
  )
}