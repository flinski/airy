import { useSearchParams } from "react-router"

const useSortFormRoute = () => {
	const [searchParams] = useSearchParams()
	return searchParams.get("sort") ?? undefined
}

export default useSortFormRoute
