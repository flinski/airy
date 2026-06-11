import Container from "@/components/layout/Container"
import Logo from "@/components/shared/Logo"
import HeaderNav from "@/components/layout/HeaderNav"
import HeaderActions from "@/components/layout/HeaderActions"

const Header = () => {
	return (
		<header className="py-2.5">
			<Container>
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-8">
						<Logo />
						<HeaderNav />
					</div>
					<HeaderActions />
				</div>
			</Container>
		</header>
	)
}

export default Header
