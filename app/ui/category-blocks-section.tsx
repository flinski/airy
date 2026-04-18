import Image from "next/image";
import Link from "next/link";

const categories = [
	{
		name: "Men",
		image: "/hero5.jpg",
		href: "/men",
	},
	{
		name: "Women",
		image: "/hero5.jpg",
		href: "/women",
	},
	{
		name: "Unisex",
		image: "/hero5.jpg",
		href: "/unisex",
	},
];

function CategoryBlocksSection() {
	return (
		<section>
			<ul className="bg-ui-950 grid grid-cols-3">
				{categories.map((category) => (
					<li key={category.href} className="relative aspect-square overflow-hidden">
						<Link href={category.href} className="group block">
							<Image
								src={category.image}
								alt="Hero"
								width={3840}
								height={2876}
								className="absolute top-0 left-0 h-full w-full object-cover object-center opacity-90 duration-500 group-hover:scale-105 group-hover:opacity-80"
							/>
							<span className="text-ui-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-4xl text-nowrap select-none">
								{category.name}
							</span>
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
}

export default CategoryBlocksSection;
