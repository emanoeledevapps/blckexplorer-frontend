export function detectInputType(value: string): 'address' | 'tx' | 'blockNumber' | 'unknown' {
  const trimmed = value.trim().toLowerCase();

  //const isHex = /^0x[0-9a-f]+$/i.test(trimmed);
  const isAddress = /^0x[0-9a-f]{40}$/i.test(trimmed);
  const isTxHash = /^0x[0-9a-f]{64}$/i.test(trimmed);
  const isBlockNumber = /^\d+$/i.test(trimmed);

  if (isAddress) return 'address';
  if (isTxHash) return 'tx';
  if (isBlockNumber) return 'blockNumber';
  return 'unknown';
}