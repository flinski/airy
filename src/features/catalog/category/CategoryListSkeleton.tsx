import CategoryItemSkeleton from "@/features/catalog/category/CategoryItemSkeleton"

const CategoryListSkeleton = () => {
	const skeletons = Array.from({ length: 7 })

	return (
		<ul className="grid grid-cols-7 gap-4">
			{skeletons.map((_, index) => (
				<CategoryItemSkeleton key={index} />
			))}
		</ul>
	)
}

export default CategoryListSkeleton
