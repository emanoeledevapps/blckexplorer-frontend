"use client"
import { JSX } from "react"
import { getReceiptTransaction } from "@/services/tx/getReceiptTransaction"
import { ReceiptTxProps, TraceTxProps } from "@/types/tx"
import { hexToDecimal } from "@/utils/hexToDecimal"
import { useQuery } from "@tanstack/react-query"
import { StatusTx } from "@/components/StatusTx/StatusTx"
import { getDebugTraceTx } from "@/services/tx/getDebugTraceTx"
import { ethers } from "ethers"

interface Props {
  tx: string
}

export function TransactionReceipt({ tx }: Props): JSX.Element {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['receitpTx', tx],
    queryFn: () => getReceiptTransaction(tx),
  })

  const receiptTx = data ? data?.result as ReceiptTxProps : null

  if (isLoading) {
    return <p>loading data...</p>
  }

  if (isError || !receiptTx) {
    return <p>Error on get data</p>
  }

  const txStatus = hexToDecimal(receiptTx.status)

  return(
    <section className="flex flex-col gap-3 mt-7">
      <p className="text-gray-500 text-sm">Receipt transaction</p>
      <StatusTx status={txStatus}/>

      {txStatus === 0 && (
        <ResponseError tx={tx} />
      )}
      {/* <DataItem label="Block" value={hexToDecimal(receiptTx.blockNumber).toString()} />
      <DataItem label="From" value={receiptTx.from} />
      <DataItem label="To" value={receiptTx.to} />
      <DataItem label="Value" value={hexToDecimal(receiptTx.value).toString()} />
      <DataItem label="Gas" value={hexToDecimal(receiptTx.gas).toString()} />
      <DataItem label="Gas price" value={hexToDecimal(receiptTx.gasPrice).toString()} />
      <DataItem label="Input" value={receiptTx.input} /> */}

    </section>
  )
}

interface ResponseErrorProps {
  tx: string
}
function ResponseError({ tx }: ResponseErrorProps): JSX.Element {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['traceTx', tx],
    queryFn: () => getDebugTraceTx(tx),
  })

  const traceTx = data ? data?.result as TraceTxProps : null

  if (isLoading) {
    return <p>loading error...</p>
  }

  if (isError || !traceTx) {
    return <p>Error on get error</p>
  }

  const iface = new ethers.Interface(['error Error(string)'])
  const decodedValue = iface.parseError('0x' + traceTx.returnValue)

  if (decodedValue) {
    return (
      <div className="">
        <DataItem label="Return value" value={decodedValue.args[0]} />
      </div>
    )
  }

  return <div />
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