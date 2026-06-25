import SortByPrice from "@/features/catalog/product/SortByPrice"
import ProductList from "@/features/catalog/product/ProductList"

const ProductGrid = () => {
	return (
		<div className="flex flex-col gap-4">
			<h2 className="text-3xl">Товары</h2>
			<SortByPrice />
			<ProductList />
		</div>
	)
}

export default ProductGrid
