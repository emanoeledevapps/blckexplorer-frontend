import { Screen } from "@/components/Screen/Screen";
import { JSX } from "react";
import { BlockData } from "./components/BlockData";

export default async function Block({ params }: { params: { block: string } }): Promise<JSX.Element> {
  const { block } = await params

  return (
    <Screen>
      <h2 className="font-bold text-4xl">
        Block #{block}
      </h2>

      <BlockData block={block} />
    </Screen>
  )
}
