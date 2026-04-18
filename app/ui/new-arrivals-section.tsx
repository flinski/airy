import Container from "@/app/ui/container";
import NewArrivalsItem from "@/app/ui/new-arrivals-item";

const items = [
	{
		id: "1",
		name: "Airy Sneakers",
		price: "$39.90",
		slug: "airy-sneakers",
		image: "/category-men.jpg",
		alt: "Airy Sneakers",
		width: 1470,
		height: 1940,
	},
	{
		id: "2",
		name: "Crew Neck T-Shirt",
		price: "$29.90",
		slug: "crew-neck-t-shirt",
		image: "/category-women.jpg",
		alt: "Crew Neck T-Shirt",
		width: 1800,
		height: 2400,
	},
	{
		id: "3",
		name: "Vest Top",
		price: "$49.90",
		slug: "vest-top",
		image: "/hero-bg.jpg",
		alt: "Vest Top",
		width: 3840,
		height: 2876,
	},
	{
		id: "4",
		name: "Half-Zip Hoodie",
		price: "$59.90",
		slug: "half-zip-hoodie",
		image: "/category-unisex.jpg",
		alt: "Half-Zip Hoodie",
		width: 1472,
		height: 2208,
	},
];

function NewArrivalsSection() {
	return (
		<section className="py-24">
			<Container>
				<h2 className="leading-heading mb-12 text-center text-5xl">New Arrivals</h2>
				<ul className="grid grid-cols-4 gap-x-6 gap-y-12">
					{items.map((item) => (
						<NewArrivalsItem key={item.id} item={item} />
					))}
				</ul>
			</Container>
		</section>
	);
}

export default NewArrivalsSection;
