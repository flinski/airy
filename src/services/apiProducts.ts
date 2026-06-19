import supabase from "@/services/supabase"
import type { ProductFilters } from "@/types/app"
import type { Product } from "@/types/database"

export const getProducts = async (
	filters?: ProductFilters
): Promise<Product[]> => {
	let query = supabase.from("products").select("*, category: category_id(*)")

	if (filters) {
		if (filters.name) {
			query = query.eq("name", filters.name)
		}
		if (filters.slug) {
			query = query.eq("slug", filters.slug)
		}
		if (filters.gender) {
			query = query.eq("gender", filters.gender)
		}
		if (filters.category?.slug) {
			query = query.eq("category.slug", filters.category.slug)
			query = query.not("category", "is", null)
		}
	}

	const { data: products, error } = await query

	if (error) {
		console.error(error.message)
		throw new Error("Не удалось получить продукты.")
	}

	return products
}
