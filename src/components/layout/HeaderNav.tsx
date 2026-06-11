import { NavLink } from "react-router"
import { Button } from "@/components/ui/button"

const links = [
	{
		to: "women",
		label: "Женщинам",
	},
	{
		to: "men",
		label: "Мужчинам",
	},
	{
		to: "children",
		label: "Детям",
	},
]

const HeaderNav = () => {
	return (
		<nav>
			<ul className="flex items-center">
				{links.map(({ to, label }) => (
					<li key={to}>
						<Button
							asChild
							className="text-ui-950 hover:bg-brand-500 hover:text-brand-50 bg-transparent leading-none"
						>
							<NavLink to={to}>{label}</NavLink>
						</Button>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default HeaderNav
