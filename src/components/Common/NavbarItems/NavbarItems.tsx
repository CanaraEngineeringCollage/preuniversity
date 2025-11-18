import Link from "next/link";
import About from "../Options/About/About";
import Courses from "../Options/Courses/Courses";
import Events from "../Options/Events/Events";
import StudentLife from "../Options/StudentLife/StudentLife";
import Updates from "../Options/Updates/Updates";

function  NavbarItems() {
  return (
    <>
      <div className="hidden nav-items  lg:flex  lg2 flex-row w-full justify-between">
        <div className="cursor-pointer   pt-[8px] text-sm xl:text-base font-semibold transition duration-300 ease-in-out h-20 flex items-center justify-center">
          <About />
        </div>
        <div className="cursor-pointer  pt-[8px] text-sm xl:text-base font-semibold transition duration-300 ease-in-out h-20 flex items-center justify-center">
          <Courses />
        </div>
        <div className="cursor-pointer  pt-[8px] text-sm xl:text-base font-semibold transition duration-300 ease-in-out h-20 flex items-center justify-center">
          <StudentLife />
        </div>
        {/* <div className="cursor-pointer  pt-[8px] text-sm xl:text-base font-semibold transition duration-300 ease-in-out h-20 flex items-center justify-center">
          <Events />
        </div> */}
        <Link href="/buzz">
          <div className="cursor-pointer  pt-[8px] text-[18px] font-semibold transition duration-300 ease-in-out h-20 flex items-center justify-center">
            Buzz
          </div>
        </Link>
        <div className="cursor-pointer  pt-[8px] text-sm xl:text-base font-semibold transition duration-300 ease-in-out h-20 flex items-center justify-center">
          <Updates />
        </div>
      </div>
    </>
  );
}

export default NavbarItems;
