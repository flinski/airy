import useGenderFromRoute from "@/features/catalog/useGenderFromRoute"
import useGetCategories from "@/features/catalog/useGetCategories"

const CategoryGrid = () => {
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
		<div className="flex flex-col gap-4">
			<div className="text-3xl">Категории</div>
			<ul className="grid grid-cols-7 gap-4">
				{categories &&
					categories.map(({ id, image_url, name }) => (
						<li key={id} className="flex cursor-pointer flex-col gap-1">
							<div className="relative aspect-3/4 overflow-hidden">
								<img
									src={image_url}
									alt={name}
									className="absolute top-0 left-0 w-full object-cover object-center"
								/>
							</div>
							<div className="text-sm">{name}</div>
						</li>
					))}
			</ul>
		</div>
	)
}

export default CategoryGrid
