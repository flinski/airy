import { useQuery } from "@tanstack/react-query"
import { getProducts } from "@/services/apiProducts"

const useGetProducts = () => {
	const {
		isPending: isProductsLoading,
		error: getProductsError,
		data: products,
	} = useQuery({
		queryKey: ["products"],
		queryFn: getProducts,
	})

	return { isProductsLoading, getProductsError, products }
}

export default useGetProducts
