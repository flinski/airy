import { Outlet } from "react-router"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

const AppLayout = () => {
	return (
		<div className="flex min-h-screen flex-col">
			<Header />
			<div className="grow">
				<Outlet />
			</div>
			<Footer />
		</div>
	)
}

export default AppLayout
