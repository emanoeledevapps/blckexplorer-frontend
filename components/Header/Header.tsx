import { JSX } from "react";

export function Header(): JSX.Element {
	return (
		<header className="w-full h-20 border-b">
			<div className="container mx-auto h-full px-5 flex items-center justify-between">
				<h1 className="font-bold text-xl">{process.env.NEXT_PUBLIC_EXPLORER_TITLE}</h1>
			</div>
		</header>
  )	
}
