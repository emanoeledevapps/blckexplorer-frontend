import { Screen } from "@/components/Screen/Screen";
import { LatestBlock } from "./components/LatestBlock";
import { Search } from "./components/Search";
import { TxsInTheLatestBlock } from "./components/TxsInTheLatestBlock";
import { NetworkData } from "./components/NetworkData";

export default function Home() {

  return (
    <Screen>
      <Search />

      <div className="flex flex-wrap lg:flex-nowrap w-full gap-10">
        <LatestBlock />
        <TxsInTheLatestBlock />
        <NetworkData />
      </div>
    </Screen>
  );
}
