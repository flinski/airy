import { Skeleton } from "@/components/ui/skeleton"

const ProductItemSkeleton = () => {
	return (
		<li className="flex flex-col gap-1">
			<Skeleton className="bg-ui-100 aspect-3/4" />
			<div className="flex flex-col gap-1">
				<Skeleton className="bg-ui-100 h-6" />
				<Skeleton className="bg-ui-100 h-12" />
			</div>
		</li>
	)
}

export default ProductItemSkeleton
