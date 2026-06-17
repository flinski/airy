import supabase from "@/services/supabase"
import type { Category } from "@/types/database"
import type { CategoriesFilters } from "@/types/app"

export const getCategories = async (
	filters?: CategoriesFilters
): Promise<Category[]> => {
	let query = supabase.from("categories").select("*")

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
	}

	const { data: categories, error } = await query

	if (error) {
		console.error(error.message)
		throw new Error("Не удалось получить категории.")
	}

	return categories
}
