import { JSX, ReactNode } from "react";
import Link from "next/link";
import { IconAddress } from "../IconAddress/IconAddress";

interface Props {
  label: string;
  value: string | number;
  linkToBlock?: boolean;
  linkToTx?: boolean;
  linkToAddress?: boolean;
  suffix?: string | number;
}

export function DataItem({
  label,
  value,
  linkToAddress,
  linkToBlock,
  linkToTx,
  suffix
}: Props): JSX.Element {
  if (linkToAddress) {
    return (
      <Container>
        <p className="text-gray-500">{label}:</p>
        <div className="flex gap-1 items-center">
          <IconAddress address={value as string} size={25}/>
          <Link href={`/address/${value}`} className="underline text-blue-500">
            {value}
          </Link>
        </div>
      </Container>
    );
  }

  if (linkToBlock) {
    return (
      <Container>
        <p className="text-gray-500">{label}:</p>
        <Link href={`/block/${value}`} className="underline text-blue-500">
          {value}
        </Link>
      </Container>
    );
  }

  if (linkToTx) {
    return (
      <Container>
        <p className="text-gray-500">{label}:</p>
        <Link href={`/tx/${value}`} className="underline text-blue-500">
          {value}
        </Link>
      </Container>
    );
  }

  return (
    <Container>
      <p className="text-gray-500">{label}:</p>
      <p className="break-all">{value}</p>
      {suffix && (
        <p>{suffix}</p>
      )}
    </Container>
  );
}

interface ContainerProps {
  children: ReactNode;
}
function Container({ children }: ContainerProps): JSX.Element {
  return <div className="flex gap-2 max-w-[1024px]">{children}</div>;
}
