import Link from "next/link";
import Image from "next/image";

interface CategoryBlockProps {
	category: {
		name: string;
		image: string;
		href: string;
		alt: string;
		width: number;
		height: number;
	};
}

function CategoryBlock({ category }: CategoryBlockProps) {
	const { name, image, href, alt, width, height } = category;

	return (
		<li className="relative aspect-square overflow-hidden">
			<Link href={href} className="group block">
				<Image
					src={image}
					alt={alt}
					width={width}
					height={height}
					className="absolute top-0 left-0 h-full w-full object-cover object-top opacity-80 duration-500 group-hover:scale-105 group-hover:opacity-90"
				/>
				<span className="text-ui-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-5xl text-nowrap opacity-90 duration-500 select-none group-hover:opacity-100">
					{name}
				</span>
			</Link>
		</li>
	);
}

export default CategoryBlock;
