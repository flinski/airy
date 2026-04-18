import Link from "next/link";

const categories = [
	{
		name: "Men",
		href: "/men",
	},
	{
		name: "Women",
		href: "/women",
	},
	{
		name: "Unisex",
		href: "/unisex",
	},
];

function CategoryNav() {
	return (
		<nav className="basis-1/3">
			<ul className="flex items-center gap-8">
				{categories.map((category) => (
					<li key={category.href}>
						<Link
							href={category.href}
							className="inline-flex h-11 items-center justify-center opacity-70 duration-200 hover:opacity-100"
						>
							{category.name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default CategoryNav;
