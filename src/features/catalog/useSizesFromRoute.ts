import { useSearchParams } from "react-router"

const useSizesFromRoute = () => {
	const [searchParams] = useSearchParams()
	return searchParams.get("sizes") ?? undefined
}

export default useSizesFromRoute
