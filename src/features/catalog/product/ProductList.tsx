import useGetProducts from "@/features/catalog/product/useGetProducts"
import ProductItem from "@/features/catalog/product/ProductItem"
import useGenderFromRoute from "@/features/catalog/useGenderFromRoute"
import useCategoryFromRoute from "@/features/catalog/useCategoryFromRoute"

const ProductList = () => {
	const { isLoading, error, products } = useGetProducts({
		gender: useGenderFromRoute(),
		category: {
			slug: useCategoryFromRoute(),
		},
	})
	console.log("products:", products)

	if (isLoading) {
		return <div>Loading...</div>
	}

	if (error) {
		console.error(error.message)
		return <div>{error.message}</div>
	}

	return (
		<ul className="grid grid-cols-4 gap-x-4 gap-y-24">
			{products?.map((product) => (
				<ProductItem product={product} />
			))}
		</ul>
	)
}

export default ProductList
