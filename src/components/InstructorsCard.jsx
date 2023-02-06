import Image from "next/image";
import InstructorImage from '../public/images/Instructor-image.png';
import Link from "next/link";

export const InstructorsCard = () => {
  return (
    <div className="w-full xl:h-104 flex flex-col-reverse flex-wrap justify-center rounded-xl shadow-lg relative overflow-hidden">
        <div className=" w-80 xl:mt-0 xl:mb-12 my-6 xl:ml-9  ml-4 z-10">
            <h3 className="xl:text-xl text-md font-mabry my-4 leading-tight">МАЛАХОВ ИГОРЬ МИХАЙЛОВИЧ</h3>
            <p className="w-52 text-s font-proxima my-4">Специалист висцеральных практик высшей категории, врач-уролог.</p>
            <Link href='/aboutinstructor' className="text-md font-mabry my-4">ПОДРОБНЕЕ</Link>  
        </div>
        <div className="xl:absolute xl:bottom-0 xl:right-0 xl:min-w-max w-80 ml-4 my-4 mask">
            <Image src={InstructorImage} alt='Instructors image' />
        </div>
    </div>
  )
}
