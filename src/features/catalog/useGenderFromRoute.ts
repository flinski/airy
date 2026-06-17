import { useLocation } from "react-router"

type Gender = "male" | "female" | "children"

const genderMap: Record<string, Gender> = {
	men: "male",
	women: "female",
	children: "children",
}

const useGenderFromRoute = () => {
	const location = useLocation()
	const segment = location.pathname.split("/")[1]

	if (!segment || !genderMap[segment]) {
		throw new Error(`Неизвестный сегмент: ${segment}`)
	}

	return genderMap[segment]
}

export default useGenderFromRoute
