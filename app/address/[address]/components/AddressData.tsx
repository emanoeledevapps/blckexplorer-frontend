/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { JSX } from "react";
import { DataItem } from "@/components/DataItem/DataItem";
import { getLatestBalance } from "@/services/address/getLatestBalance";
import { hexToDecimal } from "@/utils/hexToDecimal";
import { useQuery } from "@tanstack/react-query";
import { formatEther } from "ethers";
import { getTxCountAddress } from "@/services/tx/getTxCountAddress";

interface Props {
  address: string;
}
export function AddressData({ address }: Props): JSX.Element {
  const { data: responseLatestBalance, isLoading } = useQuery({
    queryKey: ["getLatestBalance", address],
    queryFn: () => getLatestBalance(address),
  });

  const { data: responseTxsCount, isLoading: isLoadingTxsCount } = useQuery({
    queryKey: ["getTxsCountAddress", address],
    queryFn: () => getTxCountAddress(address),
  });

  const hexBalance = responseLatestBalance ? (responseLatestBalance?.result as string) : '0x0';
  const hexTxCount = responseTxsCount ? (responseTxsCount?.result as string) : '0x0';

  if (isLoading || isLoadingTxsCount) {
    return <p>loading data...</p>;
  }

  const balance = parseFloat(formatEther(BigInt(hexToDecimal(hexBalance))));
  const txCount = hexToDecimal(hexTxCount);

  return (
    <div className="flex flex-col gap-3 mt-10">
      <DataItem
        label="Balance"
        value={Intl.NumberFormat("pt-BR", { maximumFractionDigits: 5 }).format(
          balance
        )}
        suffix={process.env.NEXT_PUBLIC_COIN_NAME}
      />

      <DataItem
        label="Transactions count"
        value={txCount}
      />
    </div>
  );
}
