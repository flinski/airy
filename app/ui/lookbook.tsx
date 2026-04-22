import LookbookList from "@/app/ui/lookbook-list";

interface LookbookProps {
	items: {
		id: string;
		image: string;
		alt: string;
		width: number;
		height: number;
	}[];
	reverse?: boolean;
}

function Lookbook({ items, reverse = false }: LookbookProps) {
	return (
		<div className="no-scrollbar group flex overflow-x-auto">
			<LookbookList items={items} reverse={reverse} />
			<LookbookList items={items} reverse={reverse} />
		</div>
	);
}

export default Lookbook;
