import Container from "@/components/layout/Container"
import CategoryGrid from "@/features/catalog/CategoryGrid"
import useGetProducts from "@/features/catalog/useGetProducts"

const CatalogPage = () => {
	const { products } = useGetProducts()

	return (
		<div className="py-6">
			<Container>
				<div className="flex flex-col gap-6">
					<CategoryGrid />
					<div>
						{products?.map((product) => (
							<div key={product.id}>{product.name}</div>
						))}
					</div>
				</div>
			</Container>
		</div>
	)
}

export default CatalogPage
