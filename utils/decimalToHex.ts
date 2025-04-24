export function decimalToHex(value: number): string {
  const hex = value.toString(16)
  return '0x' + hex
}