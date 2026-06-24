import { Skeleton } from "@/components/ui/skeleton"

const CategoryItemSkeleton = () => {
	return (
		<li className="flex flex-col gap-1">
			<Skeleton className="bg-ui-100 aspect-3/4" />
			<Skeleton className="bg-ui-100 h-5" />
		</li>
	)
}

export default CategoryItemSkeleton
