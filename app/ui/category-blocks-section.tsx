import CategoryBlock from "@/app/ui/category-block";

const categories = [
	{
		name: "Men",
		image: "/category-men.jpg",
		href: "/men",
		alt: "Men's Category",
		width: 1470,
		height: 1940,
	},
	{
		name: "Women",
		image: "/category-women.jpg",
		href: "/women",
		alt: "Women's Category",
		width: 1800,
		height: 2400,
	},
	{
		name: "Unisex",
		image: "/category-unisex.jpg",
		href: "/unisex",
		alt: "Unisex Category",
		width: 1472,
		height: 2208,
	},
];

function CategoryBlocksSection() {
	return (
		<section>
			<ul className="bg-ui-950 grid grid-cols-3">
				{categories.map((category) => (
					<CategoryBlock key={category.href} category={category} />
				))}
			</ul>
		</section>
	);
}

export default CategoryBlocksSection;
