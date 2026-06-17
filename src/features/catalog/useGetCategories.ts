import { useQuery } from "@tanstack/react-query"
import { getCategories } from "@/services/apiCategories"
import type { CategoriesFilters } from "@/types/app"

const useGetCategories = (filters?: CategoriesFilters) => {
	const {
		isLoading,
		error,
		data: categories,
	} = useQuery({
		queryKey: ["categories", filters],
		queryFn: () => getCategories(filters),
	})

	return { isLoading, error, categories }
}

export default useGetCategories
