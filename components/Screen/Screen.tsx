import React, { JSX } from "react";
import { Header } from "../Header/Header";

interface Props {
	children: React.ReactNode
}
export function Screen({ children }: Props): JSX.Element {
	return (
		<div className="w-screen h-screen flex flex-col">
			<Header />

			<main className="container mx-auto px-5 mt-10">
				{children}
			</main>
		</div>
	)
}
