import { useSearchParams } from "react-router"
import type { Category } from "@/types/database"
import { cn } from "@/lib/utils"

type CategoryItemProps = {
	category: Category
}

const CategoryItem = ({ category }: CategoryItemProps) => {
	const { id, name, slug, image_url } = category
	const [searchParams, setSearchParams] = useSearchParams()
	const isSelectedCategory = slug === searchParams.get("category")

	const handleSelectCategory = () => {
		setSearchParams({ category: slug })
	}

	return (
		<li
			key={id}
			onClick={handleSelectCategory}
			className="flex cursor-pointer flex-col gap-1"
		>
			<div
				className={cn(
					"relative aspect-3/4 overflow-hidden",
					isSelectedCategory && "outline outline-offset-1 outline-black"
				)}
			>
				<img
					src={image_url}
					alt={name}
					className="absolute top-0 left-0 w-full object-cover object-center"
				/>
			</div>
			<div
				className={cn(
					"text-center text-sm",
					isSelectedCategory && "font-medium"
				)}
			>
				{name}
			</div>
		</li>
	)
}

export default CategoryItem
