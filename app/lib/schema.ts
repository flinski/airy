export interface Category {
	id: string;
	name: string;
	slug: string;
	gender: "men" | "women" | "unisex";
}

export interface Product {
	id: string;
	category_id: string;
	name: string;
	description: string;
	base_price: number;
	created_at: string;
	image: string;
}

export interface ProductVariant {
	id: string;
}
