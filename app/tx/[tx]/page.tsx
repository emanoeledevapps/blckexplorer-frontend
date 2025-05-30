import { JSX } from "react";
import { Screen } from "@/components/Screen/Screen";
import { TransactionData } from "./components/TransactionData";
import { TransactionReceipt } from "./components/TransactionReceipt";
import { TestnetTag } from "@/components/TestnetTag/TestnetTag";

export default async function Tx({ params }: { params: Promise<{ tx: string }> }): Promise<JSX.Element> {
  const { tx } = await params

  return (
    <Screen>
      <h2 className="font-bold lg:text-xl break-all">
        Transaction {tx}
      </h2>

      {process.env.NEXT_PUBLIC_TESTNET === 'true' && (
        <TestnetTag txWarning />
      )}
      <TransactionData tx={tx} />
      <TransactionReceipt tx={tx} />
    </Screen>
  )
}
