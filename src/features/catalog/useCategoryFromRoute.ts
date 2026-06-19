import { useSearchParams } from "react-router"

const useCategoryFromRoute = () => {
	const [searchParams] = useSearchParams()
	return searchParams.get("category") ?? ""
}

export default useCategoryFromRoute
