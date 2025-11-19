"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import NavbarItems from "../NavbarItems/NavbarItems";
import DropDown from "../DropDown/DropDown";
import { useState } from "react";
import FormModal from "../FormModal/FormModal";

function Navbar({ openSidebar, sidebar }: { openSidebar: () => void; sidebar: boolean }) {
  const router = useRouter();
    const [open, setOpen] = useState(false);
  // const [isScrolled, setIsScrolled] = useState(false);

  // function handleScroll() {
  //   if (window.scrollY > 100) {
  //     setIsScrolled(true);
  //   } else {
  //     setIsScrolled(false);
  //   }
  // }
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <>
      {/* First Header */}
      <section className={`bg-white relative transition-all duration-500 ease-in-out `}>
        <nav className="  py-6 max-w-[95%]  lg:max-w-[90%] mx-auto">
          {/* For large and Medium-sized Screen */}
          <div className="flex items-center justify-between relative  lg:py-2 xl:py-3 container-padding">
            <div className="flex flex-row items-center w-[50%] h-9 md:w-[369px] 2xl:w-60 md:h-[68px] relative">
              <Link href={"/"}>
                <Image
                  src={"/svgs/logo.svg"}
                  fill
                  alt="logo"
                  onClick={() => {
                    router.push("/");
                  }}
                  className="object-contain cursor-pointer"
                />
              </Link>
            </div>
            <button onClick={() => setOpen(true)} className="text-white bg-[#3C71D7] hidden lg:block rounded-[90px] px-5 py-3 font-bold">Enquire Now</button>
          </div>
          <div className="block lg:hidden absolute top-1/2 -translate-y-1/2 right-6 z-[1000]">
            {/* Dropdown */}
            <DropDown openSidebar={openSidebar} sidebar={sidebar} />
            {/* Dropdown */}
          </div>
        </nav>
      </section>
      <section className={`bg-[#001A48] relative transition-all duration-500 ease-in-out `}>
        <nav className=" max-w-[70%] mx-auto">
          {/* For large and Medium-sized Screen */}
          <div className="flex items-center justify-between relative  container-padding">
            <NavbarItems />
          </div>
        </nav>
 <FormModal isOpen={open} onClose={() => setOpen(false)} />
      </section>
      {/* First Header */}
    </>
  );
}

export default Navbar;
