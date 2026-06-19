import type { Product } from "@/types/database"

type ProductItemsProps = {
	product: Product
}

const ProductItem = ({ product }: ProductItemsProps) => {
	const { id, name, base_price } = product

	return (
		<li key={id} className="flex cursor-pointer flex-col gap-1">
			<div className="bg-brand-50 relative aspect-3/4 overflow-hidden">
				<img
					alt={name}
					className="absolute top-0 left-0 w-full object-cover object-center"
				/>
			</div>
			<div>
				<div>{name}</div>
				<div>{base_price}$</div>
			</div>
		</li>
	)
}

export default ProductItem
