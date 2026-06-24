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
		title: "Поиск",
		icon: SearchIcon,
	},
	{
		title: "Избранное",
		icon: HeartIcon,
		to: "account/wishlist",
	},
	{
		title: "Корзина",
		icon: ShoppingCartIcon,
	},
	{
		title: "Аккаунт",
		icon: UserRoundIcon,
		to: "account",
	},
]

const HeaderActions = () => {
	return (
		<div>
			<ul className="flex items-center">
				{actions.map(({ title, icon, to }) => {
					const Icon = icon

					if (to) {
						return (
							<li key={title}>
								<Button
									size="icon"
									asChild
									className="text-ui-950 hover:bg-brand-400 hover:text-brand-50 bg-transparent"
								>
									<NavLink to={to}>
										<Icon className="size-5" />
									</NavLink>
								</Button>
							</li>
						)
					}

					return (
						<li key={title}>
							<Button
								size="icon"
								className="text-ui-950 hover:bg-brand-400 hover:text-brand-50 bg-transparent"
							>
								<Icon className="size-5" />
							</Button>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default HeaderActions
