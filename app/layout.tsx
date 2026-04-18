import type { Metadata } from "next";
import { allura, inter } from "@/app/ui/fonts";
import "@/app/styles/globals.css";

export const metadata: Metadata = {
	title: "Airy: The Art of Lightness",
	description: "Airy E-Commerce Platform",
};

interface RootLayoutProps {
	children: React.ReactNode;
}

function RootLayout({ children }: Readonly<RootLayoutProps>) {
	return (
		<html
			lang="en"
			className={`${allura.variable} ${inter.variable} ${inter.className} h-full antialiased`}
		>
			<body className="bg-ui-50 text-ui-950 leading-text min-h-full">
				<div className="overflow-hidden">{children}</div>
			</body>
		</html>
	);
}

export default RootLayout;
