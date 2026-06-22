export type Profile = {
	id: string
	full_name: string | null
	phone: string | null
	role: "user" | "admin"
	created_at: string
}

export type Category = {
	id: string
	name: string
	slug: string
	gender: "male" | "female" | "children"
	image_url: string
	created_at: string
}

export type Product = {
	id: string
	name: string
	slug: string
	description: string | null
	gender: "male" | "female" | "children"
	category_id: string
	base_price: number
	created_at: string
}

export type ProductVariant = {
	id: string
	product_id: string
	color: string
	size: string
	material: string
	price: number
	stock: number
	image_url: string
}

export type ProductWithVariants = {
	variants: ProductVariant[]
} & Product

export type ProductWithCategory = {
	category: Category
} & Product

export type ProductWithCategoryAndVariants = {
	category: Category
	variants: ProductVariant[]
} & Product

export type Order = {
	id: string
	user_id: string
	status: "new" | "processing" | "shipped" | "delivered" | "cancelled"
	total: number
	full_name: string
	phone: string
	address: string
	delivery_method: string
	payment_method: string
	created_at: string
}

export type OrderItem = {
	id: string
	order_id: string
	variant_id: string
	quantity: number
	price: number
}

export type Wishlist = {
	id: string
	user_id: string
	product_id: string
	created_at: string
}
