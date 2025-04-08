import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { http, WagmiProvider, createConfig } from "wagmi";
import { mainnet } from "wagmi/chains";
import { metaMask } from "wagmi/connectors";

const config = createConfig({
	ssr: true, // Make sure to enable this for server-side rendering (SSR) applications.
	chains: [mainnet],
	connectors: [metaMask()],
	transports: {
		[mainnet.id]: http()
	}
})

const client = new QueryClient();

export function WagmiContext({ children }: { children: React.ReactNode }) {
	return (
		<WagmiProvider config={config}>
			<QueryClientProvider client={client}>
				{children}
			</QueryClientProvider>
		</WagmiProvider>
	);
}
