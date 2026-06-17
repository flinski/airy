import { BrowserRouter, Route, Routes } from "react-router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import AppLayout from "@/components/layout/AppLayout"
import HomePage from "@/pages/HomePage"
import CatalogPage from "@/pages/CatalogPage"
import ProductPage from "@/pages/ProductPage"
import NotFoundPage from "@/pages/NotFoundPage"
import CartPage from "@/pages/CartPage"
import CheckoutPage from "@/pages/CheckoutPage"
import LoginPage from "@/pages/LoginPage"
import RegisterPage from "@/pages/RegisterPage"
import AccountPage from "@/pages/AccountPage"
import OrdersPage from "@/pages/OrdersPage"
import WishlistPage from "@/pages/WishlistPage"
import AdminDashboardPage from "@/pages/admin/AdminDashboardPage"
import AdminOrdersPage from "@/pages/admin/AdminOrdersPage"
import AdminProductsPage from "@/pages/admin/AdminProductsPage"
import AdminProductFormPage from "@/pages/admin/AdminProductFormPage"

const queryClient = new QueryClient()

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Routes>
					<Route element={<AppLayout />}>
						{/* Public routes */}
						<Route path="/" element={<HomePage />} />
						<Route path="/women" element={<CatalogPage />} />
						<Route path="/men" element={<CatalogPage />} />
						<Route path="/children" element={<CatalogPage />} />
						<Route path="/product/:slug" element={<ProductPage />} />
						<Route path="/cart" element={<CartPage />} />
						<Route path="/checkout" element={<CheckoutPage />} />
					</Route>

					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage />} />
					<Route path="*" element={<NotFoundPage />} />

					{/* Protected routes: auth */}
					<Route path="/account" element={<AccountPage />} />
					<Route path="/account/orders" element={<OrdersPage />} />
					<Route path="/account/wishlist" element={<WishlistPage />} />

					{/* Admin routes: role=admin */}
					<Route path="/admin" element={<AdminDashboardPage />} />
					<Route path="/admin/orders" element={<AdminOrdersPage />} />
					<Route path="/admin/products" element={<AdminProductsPage />} />
					<Route
						path="/admin/products/new"
						element={<AdminProductFormPage />}
					/>
					<Route
						path="/admin/products/:id"
						element={<AdminProductFormPage />}
					/>
				</Routes>
			</BrowserRouter>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}

export default App
