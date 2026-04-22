import Link from "next/link";
import Container from "@/app/ui/container";
import Instagram from "@/app/ui/socials/instagram";
import Twitter from "@/app/ui/socials/twitter";
import Facebook from "@/app/ui/socials/facebook";
import Tiktok from "@/app/ui/socials/tiktok";
import Youtube from "@/app/ui/socials/youtube";
import { allura } from "@/app/ui/fonts";

function Footer() {
	return (
		<footer className="text-ui-50 bg-ui-800 py-24">
			<Container>
				<div className="mb-12 grid grid-cols-[2fr_1fr_1fr_1fr_1fr]">
					<div className="flex flex-col gap-5">
						<div className={`${allura.className} text-6xl`}>Airy</div>
						<div className="text-ui-400 text-sm">
							Embrace the weightless freedom of fabrics that breathe with you, turning every
							movement into a whisper of pure, effortless grace.
						</div>
					</div>
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
							<li>
								<Link href="">Template</Link>
							</li>
						</ul>
					</div>
					<div className="flex flex-col gap-8 text-end">
						<h3 className="text-2xl">News</h3>
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
						</ul>
					</div>
				</div>
				<div className="flex items-center justify-between border-t py-6">
					<div className="text-ui-400">Copyright © Airy Co., Ltd. All rights reserved.</div>
					<ul className="flex items-center">
						<li>
							<Link href="" className="flex items-center justify-center p-2">
								<Twitter className="size-5" />
							</Link>
						</li>
						<li>
							<Link href="" className="flex items-center justify-center p-2">
								<Tiktok className="size-5" />
							</Link>
						</li>
						<li>
							<Link href="" className="flex items-center justify-center p-2">
								<Facebook className="size-5" />
							</Link>
						</li>
						<li>
							<Link href="" className="flex items-center justify-center p-2">
								<Instagram className="size-5" />
							</Link>
						</li>
					</ul>
				</div>
			</Container>
		</footer>
	);
}

export default Footer;
