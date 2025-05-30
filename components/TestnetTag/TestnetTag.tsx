import { JSX } from "react";

interface Props {
  txWarning?: boolean;
}
export function TestnetTag({ txWarning }: Props): JSX.Element {
  if (txWarning) {
    return (
      <div className="rounded-2xl w-fit px-5 py-3 bg-red-300 mt-10">
        <p className="text-black">This is a testnet transaction</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl w-fit px-5 py-2 bg-red-300">
      <p className="text-black text-sm">Testnet</p>
    </div>
  );
}
