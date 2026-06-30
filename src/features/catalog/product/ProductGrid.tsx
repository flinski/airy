import ProductList from "@/features/catalog/product/ProductList"
import ProductFilters from "@/features/catalog/product/ProductFilters"
import SortByPrice from "@/features/catalog/product/SortByPrice"

const ProductGrid = () => {
	return (
		<div className="flex flex-col gap-4">
			<h2 className="text-3xl">Товары</h2>
			<div className="flex items-center justify-between">
				<ProductFilters />
				<SortByPrice />
			</div>
			<ProductList />
		</div>
	)
}

export default ProductGrid
