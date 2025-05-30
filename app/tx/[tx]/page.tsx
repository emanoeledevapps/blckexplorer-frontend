import { JSX } from "react";
import { Screen } from "@/components/Screen/Screen";
import { TransactionData } from "./components/TransactionData";
import { TransactionReceipt } from "./components/TransactionReceipt";

export default async function Tx({ params }: { params: { tx: string } }): Promise<JSX.Element> {
  const { tx } = await params

  return (
    <Screen>
      <h2 className="font-bold lg:text-xl break-all">
        Transaction {tx}
      </h2>

      <TransactionData tx={tx} />
      <TransactionReceipt tx={tx} />
    </Screen>
  )
}
