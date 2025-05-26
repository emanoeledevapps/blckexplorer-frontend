export async function getDebugTraceTx(tx: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_RPC_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "debug_traceTransaction",
      params: [tx],
      id: 0
    })
  })

  return response.json()
}