import Container from "@/components/layout/Container"
import { Button } from "@/components/ui/button"
import TelegramIcon from "@/components/icons/socials/TelegramIcon"
import InstagramIcon from "@/components/icons/socials/InstagramIcon"
import TikTokIcon from "@/components/icons/socials/TikTokIcon"

const socials = [
	{
		title: "Telegram",
		icon: TelegramIcon,
		href: "https://web.telegram.org/",
	},
	{
		title: "Instagram",
		icon: InstagramIcon,
		href: "https://www.instagram.com/",
	},
	{
		title: "TikTok",
		icon: TikTokIcon,
		href: "https://www.tiktok.com/en/",
	},
]

const Footer = () => {
	return (
		<footer className="bg-ui-900 text-ui-300">
			<Container className="py-5">
				<div className="flex items-center justify-between text-sm">
					<div>© AIRY 2014—{new Date().getFullYear()}. Все права защищены.</div>
					<ul>
						{socials.map(({ title, icon, href }) => {
							const Icon = icon

							return (
								<Button
									size="icon"
									title={title}
									asChild
									className="hover:text-brand-400 text-current"
								>
									<a href={href} target="_blank">
										<Icon className="size-5" />
									</a>
								</Button>
							)
						})}
					</ul>
				</div>
			</Container>
		</footer>
	)
}

export default Footer
