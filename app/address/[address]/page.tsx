import { Screen } from "@/components/Screen/Screen";
import { AddressData } from "./components/AddressData";
import { IconAddress } from "@/components/IconAddress/IconAddress";

export default async function Address({ params }: { params: Promise<{ address: string }> }) {
  const { address } = await params;

  return (
    <Screen>
      <h2 className="font-bold text-2xl">Address</h2>
      <div className="flex flex-col lg:flex-row lg:items-center gap-5 mt-5">
        <IconAddress address={address} size={70} />
        <p className="text-black text-sm lg:text-2xl">{address}</p>
      </div>
      <AddressData address={address} />
    </Screen>
  )
}