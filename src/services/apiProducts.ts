import supabase from "@/services/supabase"
import type { Product } from "@/types/database"

export const getProducts = async (): Promise<Product[]> => {
	const { data: products, error } = await supabase.from("products").select("*")

	if (error) {
		console.error(error.message)
		throw new Error("Не удалось получить продукты.")
	}

	return products
}
