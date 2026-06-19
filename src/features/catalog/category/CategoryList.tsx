import useGenderFromRoute from "@/features/catalog/useGenderFromRoute"
import useGetCategories from "@/features/catalog/category/useGetCategories"
import CategoryItem from "@/features/catalog/category/CategoryItem"

const CategoryList = () => {
	const { isLoading, error, categories } = useGetCategories({
		gender: useGenderFromRoute(),
	})

	if (isLoading) {
		return <div>Loading...</div>
	}

	if (error) {
		console.error(error.message)
		return <div>{error.message}</div>
	}

	return (
		<ul className="grid grid-cols-7 gap-4">
			{categories?.map((category) => (
				<CategoryItem category={category} />
			))}
		</ul>
	)
}

export default CategoryList
