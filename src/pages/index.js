import { Hero } from "@components/Hero";
import { CourseCard } from "@components/CourseCard";
import Link from "next/link";
import { Slider } from "@components/Slider";
import { About } from "@components/About";
import { Licenses } from "@components/Licenses";

export default function Home() {
	return (
		<>
			<Hero />
			<div className="xl:mx-auto max-w-screen-xl pt-56 mb-36 px-4">
				<h1 className="xl:text-3xl mb-14 text-xl font-mabry leading-tight text-center uppercase">
					Ближайшие события
				</h1>
				<div className="lg:grid xl:grid-cols-3 lg:grid-cols-2 flex flex-wrap gap-6 mx-auto mb-16">
					<CourseCard />
					<CourseCard />
					<CourseCard />
				</div>
				<div className="xl:my-24 xl:text-xl my-10 text-m flex items-center font-mabry mx-auto uppercase underline underline-offset-4 justify-center">
					<Link href="/" className="">
						Открыть календарь событий
					</Link>
				</div>
			</div>
			<Slider />
			<About />
			<Licenses />
		</>
	);
}
