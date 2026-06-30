import { useSearchParams } from "react-router"
import {
	Combobox,
	ComboboxChip,
	ComboboxChips,
	ComboboxChipsInput,
	ComboboxContent,
	ComboboxEmpty,
	ComboboxItem,
	ComboboxList,
	ComboboxValue,
} from "@/components/ui/combobox"

const sizes = ["XXS", "XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"]

const FilterBySize = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const selectedSizes = searchParams.get("sizes")?.split(",") ?? []

	const handleSelectSize = (value: string[]) => {
		const nextParams = new URLSearchParams(searchParams)

		if (value.length > 0) {
			nextParams.set("sizes", value.join(","))
		} else {
			nextParams.delete("sizes")
		}

		setSearchParams(nextParams)
	}

	return (
		<Combobox
			items={sizes}
			multiple
			value={selectedSizes}
			onValueChange={handleSelectSize}
		>
			<ComboboxChips>
				<ComboboxValue>
					{selectedSizes.map((item) => (
						<ComboboxChip key={item}>{item}</ComboboxChip>
					))}
				</ComboboxValue>
				<ComboboxChipsInput placeholder="Размер" />
			</ComboboxChips>
			<ComboboxContent>
				<ComboboxEmpty>Ничего не найдено.</ComboboxEmpty>
				<ComboboxList>
					{(item) => (
						<ComboboxItem key={item} value={item}>
							{item}
						</ComboboxItem>
					)}
				</ComboboxList>
			</ComboboxContent>
		</Combobox>
	)
}

export default FilterBySize
