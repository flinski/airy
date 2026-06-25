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
		const nextParams = new URLSearchParams(searchParams)

		if (!isSelectedCategory) {
			nextParams.set("category", slug)
		} else {
			nextParams.delete("category")
		}
		setSearchParams(nextParams)
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
					isSelectedCategory && "outline-brand-500 outline-2"
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
					isSelectedCategory && "text-brand-500 font-bold"
				)}
			>
				{name}
			</div>
		</li>
	)
}

export default CategoryItem
