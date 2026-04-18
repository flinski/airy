import Logo from "@/app/ui/logo";
import Container from "@/app/ui/container";
import CategoryNav from "@/app/ui/category-nav";
import HeaderActions from "@/app/ui/header-actions";

function Header() {
	return (
		<header className="absolute top-0 left-0 z-10 w-full">
			<Container>
				<div className="flex items-center px-6 py-2">
					<CategoryNav />
					<Logo />
					<HeaderActions />
				</div>
			</Container>
		</header>
	);
}

export default Header;
