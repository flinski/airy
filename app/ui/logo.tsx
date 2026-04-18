import Link from "next/link";
import { allura } from "@/app/ui/fonts";

function Logo() {
	return (
		<div className={`${allura.className} leading-heading basis-1/3 text-center text-4xl`}>
			<Link href="/">Airy</Link>
		</div>
	);
}

export default Logo;
