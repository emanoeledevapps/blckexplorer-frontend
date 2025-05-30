import { DataItem } from "@/components/DataItem/DataItem";
import { JSX } from "react";

export function NetworkData(): JSX.Element {
  return (
    <div className="flex flex-col gap-1 w-full max-w-[500px]">
      <p className="text-black">Network data</p>
      <div className="rounded-2xl p-3 border flex flex-col gap-1">
        <DataItem label="ID" value={process.env.NEXT_PUBLIC_NETWORK_ID as string}/>
        <DataItem label="Name" value={process.env.NEXT_PUBLIC_NETWORK_NAME as string}/>
        <DataItem label="Coin name" value={process.env.NEXT_PUBLIC_COIN_NAME as string}/>
        <DataItem label="RPC" value={process.env.NEXT_PUBLIC_NETWORK_RPC as string}/>
      </div>
    </div>
  )
} 