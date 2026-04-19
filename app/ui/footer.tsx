import Container from "@/app/ui/container";
import { allura } from "@/app/ui/fonts";
import Link from "next/link";

function Footer() {
	return (
		<footer className="text-ui-50 bg-ui-800 py-24">
			<Container>
				<div className="mb-12 grid grid-cols-[2fr_1fr_1fr_1fr]">
					<div className={`${allura.className} text-6xl`}>Airy</div>
					<div className="flex flex-col gap-8 text-end">
						<h3 className="text-2xl">About</h3>
						<ul className="text-ui-400 flex flex-col gap-1">
							<li>
								<Link href="">Template</Link>
							</li>
							<li>
								<Link href="">Template</Link>
							</li>
							<li>
								<Link href="">Template</Link>
							</li>
						</ul>
					</div>
					<div className="flex flex-col gap-8 text-end">
						<h3 className="text-2xl">Account</h3>
						<ul className="text-ui-400 flex flex-col gap-1">
							<li>
								<Link href="">Template</Link>
							</li>
							<li>
								<Link href="">Template</Link>
							</li>
							<li>
								<Link href="">Template</Link>
							</li>
						</ul>
					</div>
					<div className="flex flex-col gap-8 text-end">
						<h3 className="text-2xl">Help</h3>
						<ul className="text-ui-400 flex flex-col gap-1">
							<li>
								<Link href="">Template</Link>
							</li>
							<li>
								<Link href="">Template</Link>
							</li>
							<li>
								<Link href="">Template</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="flex items-center justify-between border-t py-4">
					<div className="text-ui-400">Copyright © Airy Co., Ltd. All rights reserved.</div>
					<ul className="flex items-center gap-2">
						<li>
							<Link href="">1</Link>
						</li>
						<li>
							<Link href="">2</Link>
						</li>
						<li>
							<Link href="">3</Link>
						</li>
					</ul>
				</div>
			</Container>
		</footer>
	);
}

export default Footer;
