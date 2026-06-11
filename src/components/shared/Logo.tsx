import { CrownIcon } from "lucide-react"
import { NavLink } from "react-router"
import { Button } from "@/components/ui/button"

const Logo = () => {
	return (
		<Button size="icon-lg" asChild className="bg-brand-500 hover:bg-brand-400">
			<NavLink to="/">
				<CrownIcon className="size-5" />
			</NavLink>
		</Button>
	)
}

export default Logo
