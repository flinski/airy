import Link from "next/link";
import { Heart, Search, ShoppingCart, UserRound } from "lucide-react";
import Container from "@/app/ui/container";
import { allura } from "@/app/ui/fonts";

function Header() {
	return (
		<header className="absolute top-0 left-0 z-10 w-full">
			<Container>
				<div className="flex items-center px-6 py-2">
					<nav className="flex basis-1/3 items-center gap-8">
						<Link href="/men" className="leading-11">
							Men
						</Link>
						<Link href="/women" className="leading-11">
							Women
						</Link>
						<Link href="/unisex" className="leading-11">
							Unisex
						</Link>
					</nav>
					<div className={`${allura.className} leading-heading basis-1/3 text-center text-4xl`}>
						<Link href="/">Airy</Link>
					</div>
					<ul className="flex basis-1/3 items-center justify-end">
						<li>
							<button className="flex cursor-pointer items-center justify-center p-3">
								<Search size={20} />
							</button>
						</li>
						<li>
							<button className="flex cursor-pointer items-center justify-center p-3">
								<UserRound size={20} />
							</button>
						</li>
						<li>
							<Link href="/wishlist" className="flex items-center justify-center p-3">
								<Heart size={20} />
							</Link>
						</li>
						<li>
							<Link href="/cart" className="flex items-center justify-center p-3">
								<ShoppingCart size={20} />
							</Link>
						</li>
					</ul>
				</div>
			</Container>
		</header>
	);
}

export default Header;
