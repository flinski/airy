import Container from "@/components/layout/Container"
import CategoryGrid from "@/features/catalog/category/CategoryGrid"
import ProductGrid from "@/features/catalog/product/ProductGrid"

const CatalogPage = () => {
	return (
		<Container className="pt-6 pb-24">
			<div className="flex flex-col gap-8">
				<CategoryGrid />
				<ProductGrid />
			</div>
		</Container>
	)
}

export default CatalogPage
