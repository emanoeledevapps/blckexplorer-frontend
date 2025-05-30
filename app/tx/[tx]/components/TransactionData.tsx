"use client";
import { DataItem } from "@/components/DataItem/DataItem";
import { getTransactionData } from "@/services/tx/getTransactionData";
import { TxProps } from "@/types/tx";
import { hexToDecimal } from "@/utils/hexToDecimal";
import { useQuery } from "@tanstack/react-query";
import { JSX } from "react";

interface Props {
  tx: string;
}

export function TransactionData({ tx }: Props): JSX.Element {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["txData", tx],
    queryFn: () => getTransactionData(tx),
  });

  const txData = data ? (data?.result as TxProps) : null;

  if (isLoading) {
    return <p>loading data...</p>;
  }

  if (isError || !txData) {
    return (
      <div className="mt-20">
        <p className="font-bold text-black text-4xl">Transaction not found!</p>
      </div>
    );
  }

  return (
    <section className="flex flex-col gap-3 mt-10">
      <DataItem
        label="Block"
        value={hexToDecimal(txData.blockNumber).toString()}
        linkToBlock
      />
      <DataItem label="From" value={txData.from} linkToAddress />
      <DataItem label="To" value={txData.to} linkToAddress />
      <DataItem label="Value" value={hexToDecimal(txData.value).toString()} />
      <DataItem label="Gas" value={hexToDecimal(txData.gas).toString()} />
      <DataItem
        label="Gas price"
        value={hexToDecimal(txData.gasPrice).toString()}
      />
      <DataItem label="Input" value={txData.input} />
    </section>
  );
}
