import { Link } from "react-router"
import { HeartIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { ProductWithCategoryAndVariants } from "@/types/database"
import { useState } from "react"
import { cn } from "@/lib/utils"

type ProductItemsProps = {
	product: ProductWithCategoryAndVariants
}

const ProductItem = ({ product }: ProductItemsProps) => {
	const { name, slug, base_price, variants } = product
	const [colorIndex, setColorIndex] = useState(0)

	const handleHoverColor = (index: number) => {
		setColorIndex(index)
	}

	return (
		<li className="flex cursor-pointer flex-col gap-1">
			<Link to={`/product/${slug}`}>
				<div className="bg-ui-100 relative aspect-3/4 overflow-hidden">
					<img
						src={variants[colorIndex]?.image_url}
						alt={name}
						className="absolute top-0 left-0 w-full object-cover object-center"
					/>
				</div>
				<div className="flex flex-col gap-1">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-1.5">
							{variants.map((variant, index) => (
								<div
									style={{ backgroundColor: variant.color }}
									onMouseEnter={() => handleHoverColor(index)}
									className={cn(
										"size-5 rounded-full",
										index === colorIndex &&
											"outline outline-offset-1 outline-black"
									)}
								></div>
							))}
						</div>
						<Button
							size="icon-sm"
							variant="ghost"
							className="hover:text-brand-500 hover:bg-transparent"
						>
							<HeartIcon className="size-5" />
						</Button>
					</div>
					<div>
						<strong className="text-xl leading-none font-normal tabular-nums">
							{base_price}.00 ₽
						</strong>
					</div>
					<div className="leading-none">{name}</div>
				</div>
			</Link>
		</li>
	)
}

export default ProductItem
