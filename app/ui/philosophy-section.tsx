import Container from "@/app/ui/container";
import Image from "next/image";

function PhilosophySection() {
	return (
		<section className="py-24">
			<Container>
				<h2 className="leading-heading mb-12 text-5xl">Our Philosophy</h2>
				<div className="flex flex-col gap-8">
					<div className="grid grid-cols-2 gap-4">
						<div className="relative aspect-square w-full">
							<Image
								src="/category-men.jpg"
								alt="Alt"
								width={1470}
								height={1940}
								className="absolute top-0 left-0 h-full w-full overflow-hidden object-cover object-center"
							/>
						</div>
						<div className="flex h-full items-end">
							<div className="flex flex-col gap-4">
								<h3 className="text-3xl">Organic Fabrics</h3>
								<p className="text-ui-700">
									Airy uses breathable, sustainably sourced materials that feel soft against skin
									and support conscious living. Every piece is designed to be gentle, durable, and
									elegant for modern everyday wear.
								</p>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-2 gap-4">
						<div className="flex h-full items-end">
							<div className="flex flex-col gap-4">
								<h3 className="text-3xl">Weightless Design</h3>
								<p className="text-ui-700">
									Our silhouettes drift lightly over the body with balanced structure and effortless
									movement. Airy&apos;s weightless design makes dressing feel easy, freeing and
									refined for a calm, confident wardrobe.
								</p>
							</div>
						</div>
						<div className="relative aspect-square w-full">
							<Image
								src="/category-women.jpg"
								alt="Alt"
								width={1800}
								height={2400}
								className="absolute top-0 left-0 h-full w-full overflow-hidden object-cover object-center"
							/>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}

export default PhilosophySection;
