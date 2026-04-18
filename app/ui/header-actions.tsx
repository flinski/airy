import Link from "next/link";
import { Heart, Search, ShoppingCart, UserRound } from "lucide-react";

const actions = [
	{ name: "Search", icon: Search },
	{ name: "Account", icon: UserRound },
	{ name: "Wishlist", icon: Heart, href: "/wishlist" },
	{ name: "Cart", icon: ShoppingCart, href: "/cart" },
];

function HeaderActions() {
	return (
		<nav className="basis-1/3">
			<ul className="flex items-center justify-end">
				{actions.map((action) => {
					const { name, icon: Icon, href } = action;
					const size = 20;

					if (href) {
						return (
							<li key={name}>
								<Link
									href={href}
									className="flex items-center justify-center p-3 opacity-70 duration-200 hover:opacity-100"
								>
									<Icon size={size} />
								</Link>
							</li>
						);
					}

					return (
						<li key={name}>
							<button className="flex cursor-pointer items-center justify-center p-3 opacity-70 duration-200 hover:opacity-100">
								<Icon size={size} />
							</button>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}

export default HeaderActions;
