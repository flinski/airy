import Lookbook from "@/app/ui/lookbook";

const items = [
	{
		id: "1",
		image: "/lookbook/street-01.jpg",
		alt: "Street 01",
		width: 689,
		height: 1200,
	},
	{
		id: "2",
		image: "/lookbook/street-02.jpg",
		alt: "Street 02",
		width: 728,
		height: 1094,
	},
	{
		id: "3",
		image: "/lookbook/street-03.jpg",
		alt: "Street 03",
		width: 1080,
		height: 1349,
	},
	{
		id: "4",
		image: "/lookbook/street-04.jpg",
		alt: "Street 04",
		width: 1000,
		height: 1334,
	},
	{
		id: "5",
		image: "/lookbook/street-05.jpg",
		alt: "Street 05",
		width: 750,
		height: 1125,
	},
	{
		id: "6",
		image: "/lookbook/street-06.jpg",
		alt: "Street 06",
		width: 676,
		height: 1201,
	},
	{
		id: "7",
		image: "/lookbook/street-07.jpg",
		alt: "Street 07",
		width: 736,
		height: 981,
	},
	{
		id: "8",
		image: "/lookbook/street-08.jpg",
		alt: "Street 08",
		width: 694,
		height: 1041,
	},
	{
		id: "9",
		image: "/lookbook/street-09.jpg",
		alt: "Street 09",
		width: 729,
		height: 1082,
	},
	{
		id: "10",
		image: "/lookbook/street-10.jpg",
		alt: "Street 10",
		width: 910,
		height: 1200,
	},
];

const items2 = [
	{
		id: "11",
		image: "/lookbook/street-11.jpg",
		alt: "Street 11",
		width: 828,
		height: 1242,
	},
	{
		id: "12",
		image: "/lookbook/street-12.jpg",
		alt: "Street 12",
		width: 692,
		height: 918,
	},
	{
		id: "13",
		image: "/lookbook/street-13.jpg",
		alt: "Street 13",
		width: 660,
		height: 990,
	},
	{
		id: "14",
		image: "/lookbook/street-14.jpg",
		alt: "Street 14",
		width: 1022,
		height: 1200,
	},
	{
		id: "15",
		image: "/lookbook/street-15.jpg",
		alt: "Street 15",
		width: 646,
		height: 1200,
	},
	{
		id: "16",
		image: "/lookbook/street-16.jpg",
		alt: "Street 16",
		width: 1179,
		height: 1331,
	},
	{
		id: "17",
		image: "/lookbook/street-17.jpg",
		alt: "Street 17",
		width: 800,
		height: 1358,
	},
	{
		id: "18",
		image: "/lookbook/street-18.jpg",
		alt: "Street 18",
		width: 1200,
		height: 1846,
	},
	{
		id: "19",
		image: "/lookbook/street-19.jpg",
		alt: "Street 19",
		width: 736,
		height: 917,
	},
	{
		id: "20",
		image: "/lookbook/street-20.jpg",
		alt: "Street 20",
		width: 736,
		height: 1196,
	},
];

function LookbookSection() {
	return (
		<section className="pt-24 pb-48">
			<div className="flex flex-col gap-2">
				<Lookbook items={items} />
				<Lookbook items={items2} reverse={true} />
			</div>
		</section>
	);
}

export default LookbookSection;
