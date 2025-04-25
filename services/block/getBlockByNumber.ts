export async function getBlockByNumber(blockNumberHex: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_RPC_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "eth_getBlockByNumber",
      params: [blockNumberHex, false],
      id: 0
    })
  })

  return response.json()
}