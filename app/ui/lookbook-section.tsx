import Image from "next/image";

function LookbookSection() {
	return (
		<section className="py-48">
			<div className="flex flex-col gap-2">
				<div className="no-scrollbar group flex overflow-x-auto">
					<ul className="flex animate-[carousel_15s_infinite_linear] gap-2 pr-2 group-hover:animate-[carousel_15s_infinite_linear_paused]">
						{Array.from({ length: 5 }).map((_, index) => (
							<li key={index} className="shrink-0 grow-0">
								<div className="relative aspect-3/4 h-100.5">
									<Image
										src="/hero-bg.jpg"
										alt="Alt"
										width={3840}
										height={2876}
										className="absolute top-0 left-0 h-full w-full overflow-hidden object-cover object-center"
									/>
								</div>
							</li>
						))}
					</ul>
					<ul className="flex animate-[carousel_15s_infinite_linear] gap-2 pr-2 group-hover:animate-[carousel_15s_infinite_linear_paused]">
						{Array.from({ length: 5 }).map((_, index) => (
							<li key={index} className="shrink-0 grow-0">
								<div className="relative aspect-3/4 h-100.5">
									<Image
										src="/hero-bg.jpg"
										alt="Alt"
										width={3840}
										height={2876}
										className="absolute top-0 left-0 h-full w-full overflow-hidden object-cover object-center"
									/>
								</div>
							</li>
						))}
					</ul>
				</div>
				<div className="no-scrollbar group flex overflow-x-auto">
					<ul className="flex animate-[carousel_15s_infinite_linear_reverse] gap-2 pr-2 group-hover:animate-[carousel_15s_infinite_linear_paused]">
						{Array.from({ length: 5 }).map((_, index) => (
							<li key={index} className="shrink-0 grow-0">
								<div className="relative aspect-3/4 h-100.5">
									<Image
										src="/hero-bg.jpg"
										alt="Alt"
										width={3840}
										height={2876}
										className="absolute top-0 left-0 h-full w-full overflow-hidden object-cover object-center"
									/>
								</div>
							</li>
						))}
					</ul>
					<ul className="flex animate-[carousel_15s_infinite_linear_reverse] gap-2 pr-2 group-hover:animate-[carousel_15s_infinite_linear_paused]">
						{Array.from({ length: 5 }).map((_, index) => (
							<li key={index} className="shrink-0 grow-0">
								<div className="relative aspect-3/4 h-100.5">
									<Image
										src="/hero-bg.jpg"
										alt="Alt"
										width={3840}
										height={2876}
										className="absolute top-0 left-0 h-full w-full overflow-hidden object-cover object-center"
									/>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}

export default LookbookSection;
