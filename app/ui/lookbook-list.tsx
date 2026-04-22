import { cn } from "@/app/lib/utils";
import LookbookItem from "@/app/ui/lookbook-item";

interface LookbookListProps {
	items: {
		id: string;
		image: string;
		alt: string;
		width: number;
		height: number;
	}[];
	reverse?: boolean;
}

function LookbookList({ items, reverse = false }: LookbookListProps) {
	return (
		<ul
			className={cn(
				`flex animate-[carousel_30s_infinite_linear] gap-2 pr-2 group-hover:animate-[carousel_30s_infinite_linear_paused]`,
				reverse &&
					"animate-[carousel_30s_infinite_linear_reverse] group-hover:animate-[carousel_30s_infinite_linear_reverse_paused]"
			)}
		>
			{items.map((item) => (
				<LookbookItem key={item.id} item={item} />
			))}
		</ul>
	);
}

export default LookbookList;
