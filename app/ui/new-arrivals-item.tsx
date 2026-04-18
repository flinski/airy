import Link from "next/link";
import Image from "next/image";

interface NewArrivalsItemProps {
	item: {
		id: string;
		name: string;
		price: string;
		slug: string;
		image: string;
		alt: string;
		width: number;
		height: number;
	};
}

function NewArrivalsItem({ item }: NewArrivalsItemProps) {
	const { name, price, slug, image, alt, width, height } = item;

	return (
		<li>
			<Link href={`/product/${slug}`}>
				<article className="flex flex-col gap-2">
					<div className="relative aspect-3/4 w-full">
						<Image
							src={image}
							alt={alt}
							width={width}
							height={height}
							className="absolute top-0 left-0 h-full w-full overflow-hidden object-cover object-center"
						/>
					</div>
					<h3>{name}</h3>
					<strong className="text-xl leading-none font-normal">{price}</strong>
				</article>
			</Link>
		</li>
	);
}

export default NewArrivalsItem;
