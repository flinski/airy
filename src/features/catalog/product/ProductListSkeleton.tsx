import ProductItemSkeleton from "@/features/catalog/product/ProductItemSkeleton"

const ProductListSkeleton = () => {
	const skeletons = Array.from({ length: 4 })

	return (
		<ul className="grid grid-cols-4 gap-x-4 gap-y-24">
			{skeletons.map((_, index) => (
				<ProductItemSkeleton key={index} />
			))}
		</ul>
	)
}

export default ProductListSkeleton
