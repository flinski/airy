import { useSearchParams } from "react-router"

const useSortFromRoute = () => {
	const [searchParams] = useSearchParams()
	return searchParams.get("sort") ?? undefined
}

export default useSortFromRoute
