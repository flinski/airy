import FilterBySize from "@/features/catalog/product/FilterBySize"

const ProductFilters = () => {
	return (
		<ul className="flex items-center gap-4">
			<li>
				<FilterBySize />
			</li>
		</ul>
	)
}

export default ProductFilters
