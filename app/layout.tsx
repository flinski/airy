import type { Metadata } from "next";
import { inter } from "@/app/ui/fonts";
import "@/app/styles/globals.css";

export const metadata: Metadata = {
	title: "Airy",
	description: "Airy E-Commerce Platform",
};

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
	return (
		<html lang="en" className={`${inter.variable} ${inter.className} h-full antialiased`}>
			<body className="bg-ui-50 text-ui-950 leading-text min-h-full">{children}</body>
		</html>
	);
}
