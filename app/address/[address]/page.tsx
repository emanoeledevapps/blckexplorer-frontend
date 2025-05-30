import { Screen } from "@/components/Screen/Screen";
import { AddressData } from "./components/AddressData";

export default function Address({ params }: { params: { address: string } }) {
  const { address } = params;

  return (
    <Screen>
      <h2 className="font-bold text-2xl">
        Address {address}
      </h2>

      <AddressData address={address} />
    </Screen>
  )
}