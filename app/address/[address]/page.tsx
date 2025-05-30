import { Screen } from "@/components/Screen/Screen";
import { AddressData } from "./components/AddressData";
import { IconAddress } from "@/components/IconAddress/IconAddress";

export default function Address({ params }: { params: { address: string } }) {
  const { address } = params;

  return (
    <Screen>
      <h2 className="font-bold text-2xl">Address</h2>
      <div className="flex items-center gap-5 mt-5">
        <IconAddress address={address} size={70} />
        <p className="text-black text-2xl">{address}</p>
      </div>
      <AddressData address={address} />
    </Screen>
  )
}