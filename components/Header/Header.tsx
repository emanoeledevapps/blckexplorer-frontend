import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";

export function Header(): JSX.Element {
	const LogoUrl = process.env.NEXT_PUBLIC_LOGO_HEADER_URL ? process.env.NEXT_PUBLIC_LOGO_HEADER_URL : ''

	return (
		<header className="w-full py-3 border-b">
			<div className="container mx-auto h-full px-5 flex items-center justify-between">
				<Link href="/" className="flex items-center gap-3">
					<Image
						width={60}
						height={60}
						alt="Logo explorer"
						src={LogoUrl}
					/>
					<h1 className="font-bold text-xl">{process.env.NEXT_PUBLIC_EXPLORER_TITLE}</h1>
				</Link>
			</div>
		</header>
  )	
}
