import { Screen } from "@/components/Screen/Screen";
import { LatestBlock } from "./components/LatestBlock";
import { Search } from "./components/Search";

export default function Home() {

  return (
    <Screen>
      <Search />
      <LatestBlock />
    </Screen>
  );
}
