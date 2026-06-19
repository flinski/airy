import CategoryList from "@/features/catalog/category/CategoryList"

const CategoryGrid = () => {
	return (
		<div className="flex flex-col gap-4">
			<h2 className="text-3xl">Категории</h2>
			<CategoryList />
		</div>
	)
}

export default CategoryGrid
