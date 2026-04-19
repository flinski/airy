import Header from "@/app/ui/header";
import HeroSection from "@/app/ui/hero-section";
import CategoryBlocksSection from "@/app/ui/category-blocks-section";
import NewArrivalsSection from "@/app/ui/new-arrivals-section";
import PhilosophySection from "@/app/ui/philosophy-section";
import LookbookSection from "@/app/ui/lookbook-section";
import Footer from "@/app/ui/footer";

function Page() {
	return (
		<div>
			<Header />
			<HeroSection />
			<NewArrivalsSection />
			<CategoryBlocksSection />
			<PhilosophySection />
			<LookbookSection />
			<Footer />
		</div>
	);
}

export default Page;
