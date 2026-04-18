import Image from "next/image";

function HeroSection() {
	return (
		<section>
			<div className="bg-ui-950 relative h-screen overflow-hidden">
				<Image
					src="/hero5.jpg"
					alt="Hero"
					width={3840}
					height={2876}
					className="absolute top-0 left-0 h-full w-full object-cover object-top opacity-90"
				/>
				<span className="text-ui-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-8xl text-nowrap select-none">
					The Art of Lightness
				</span>
			</div>
		</section>
	);
}

export default HeroSection;
