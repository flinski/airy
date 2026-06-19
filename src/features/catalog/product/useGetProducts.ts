import { useQuery } from "@tanstack/react-query"
import { getProducts } from "@/services/apiProducts"
import type { ProductFilters } from "@/types/app"

const useGetProducts = (filters?: ProductFilters) => {
	const {
		isLoading,
		error,
		data: products,
	} = useQuery({
		queryKey: ["products", filters],
		queryFn: () => getProducts(filters),
	})

	return { isLoading, error, products }
}

export default useGetProducts
