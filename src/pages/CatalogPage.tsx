import useGetProducts from "@/features/catalog/useGetProducts"

const CatalogPage = () => {
	const { products } = useGetProducts()

	return (
		<div>
			{products?.map((product) => (
				<div key={product.id}>{product.name}</div>
			))}
		</div>
	)
}

export default CatalogPage
