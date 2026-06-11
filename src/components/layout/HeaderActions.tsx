import { NavLink } from "react-router"
import {
	HeartIcon,
	SearchIcon,
	ShoppingCartIcon,
	UserRoundIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const actions = [
	{
		label: "Поиск",
		icon: SearchIcon,
	},
	{
		label: "Избранное",
		icon: HeartIcon,
		to: "account/wishlist",
	},
	{
		label: "Корзина",
		icon: ShoppingCartIcon,
	},
	{
		label: "Аккаунт",
		icon: UserRoundIcon,
		to: "account",
	},
]

const HeaderActions = () => {
	return (
		<div>
			<ul>
				{actions.map(({ icon, to }) => {
					const Icon = icon

					if (to) {
						return (
							<Button
								size="icon-lg"
								asChild
								className="text-ui-950 hover:bg-brand-500 hover:text-brand-50 bg-transparent"
							>
								<NavLink to={to}>
									<Icon className="size-5" />
								</NavLink>
							</Button>
						)
					}

					return (
						<Button
							size="icon-lg"
							className="text-ui-950 hover:bg-brand-500 hover:text-brand-50 bg-transparent"
						>
							<Icon className="size-5" />
						</Button>
					)
				})}
			</ul>
		</div>
	)
}

export default HeaderActions
