import useGenderFromRoute from "@/features/catalog/useGenderFromRoute"
import useGetCategories from "@/features/catalog/category/useGetCategories"
import CategoryItem from "@/features/catalog/category/CategoryItem"
import CategoryListSkeleton from "@/features/catalog/category/CategoryListSkeleton"

const CategoryList = () => {
	const { isLoading, error, categories } = useGetCategories({
		gender: useGenderFromRoute(),
	})

	if (isLoading) {
		return <CategoryListSkeleton />
	}

	if (error) {
		console.error(error.message)
		return <div>{error.message}</div>
	}

	return (
		<ul className="grid grid-cols-7 gap-4">
			{categories?.map((category) => (
				<CategoryItem key={category.id} category={category} />
			))}
		</ul>
	)
}

export default CategoryList
