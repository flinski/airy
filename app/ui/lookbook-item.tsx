import Image from "next/image";

interface LookbookItemProps {
	item: {
		image: string;
		alt: string;
		width: number;
		height: number;
	};
}

function LookbookItem({ item }: LookbookItemProps) {
	const { image, alt, width, height } = item;

	return (
		<li className="shrink-0 grow-0">
			<div className="relative aspect-3/4 h-100.5">
				<Image
					src={image}
					alt={alt}
					width={width}
					height={height}
					className="absolute top-0 left-0 h-full w-full overflow-hidden object-cover object-center"
				/>
			</div>
		</li>
	);
}

export default LookbookItem;
