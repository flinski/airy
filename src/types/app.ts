export type CategoryFilters = {
	name?: string
	slug?: string
	gender?: "female" | "male" | "children"
}

export type ProductFilters = {
	name?: string
	slug?: string
	gender?: "female" | "male" | "children"
	category?: {
		slug?: string
	}
}
