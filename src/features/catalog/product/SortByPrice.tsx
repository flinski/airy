import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { useLocation, useSearchParams } from "react-router"

const SortByPrice = () => {
	const location = useLocation()
	const [searchParams, setSearchParams] = useSearchParams()
	const currentSort = searchParams.get("sort") ?? ""

	const handleSelectSort = (value: string) => {
		const nextParams = new URLSearchParams(searchParams)

		if (value) {
			nextParams.set("sort", value)
		} else {
			nextParams.delete("sort")
		}

		setSearchParams(nextParams)
	}

	return (
		<Select
			key={`${location.pathname}${location.search}-${location.key}`}
			onValueChange={handleSelectSort}
			value={currentSort || undefined}
		>
			<SelectTrigger className="w-45">
				<SelectValue placeholder="Цена" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>Цена</SelectLabel>
					<SelectItem value="price-asc">Сначала дешёвые</SelectItem>
					<SelectItem value="price-desc">Сначала дорогие</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	)
}

export default SortByPrice
