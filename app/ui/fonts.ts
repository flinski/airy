import { Inter } from "next/font/google";
import { Allura } from "next/font/google";

export const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const allura = Allura({
	subsets: ["latin"],
	variable: "--font-allura",
	weight: ["400"],
});
