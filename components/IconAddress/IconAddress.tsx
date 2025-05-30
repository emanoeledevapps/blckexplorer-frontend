"use client"
import { JSX } from "react";
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon'

interface Props {
  address: string
  size?: number
}
export function IconAddress({ address, size = 20 }: Props): JSX.Element {
  return (
    <Jazzicon diameter={size} seed={jsNumberForAddress(address)} />
  )
}