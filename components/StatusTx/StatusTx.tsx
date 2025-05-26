import { JSX } from "react";

interface Props {
  status: number;
}

export function StatusTx({ status }: Props): JSX.Element {
  if (status === 0) {
    return (
      <div className="px-5 py-2 rounded-2xl bg-red-500 w-fit">
        <p className="font-bold text-white">Failed</p>
      </div>
    )
  }

  if (status === 1) {
    return (
      <div className="px-5 py-2 rounded-2xl bg-green-600 w-fit">
        <p className="font-bold text-white">Success</p>
      </div>
    )
  }

  return <div />
}
