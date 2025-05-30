export async function getLatestBalance(address: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_RPC_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "eth_getBalance",
      params: [address, 'latest'],
      id: 0
    })
  })

  return response.json()
}