"use client";
import { ListItem, Menu, MenuHandler, MenuList, Typography } from "@material-tailwind/react";
import { useState } from "react";
// import { FaChevronUp } from "react-icons/fa6";
// import { College, Employees, Certicficate, HandShake } from "../../../../components/Icons/Icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronUp } from "react-icons/fa6";

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} offset={{ mainAxis: 20 }} placement="bottom" allowHover={true}>
      <MenuHandler>
        <Typography as="div" className="text-sm xl:text-base">
          <ListItem
            className={`flex items-center gap-2 ${
              isMenuOpen ? "opacity-100" : "opacity-100"
            } py-2 pr-4  transition- ease-in-out duration-300 font-bold  bg-transparent text-white hover:bg-transparent shadow-none rounded-none outline-none focus:ring-0`}
            selected={isMenuOpen || isMobileMenuOpen}
            placeholder=""
            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
          >
            About
            <FaChevronUp strokeWidth={2.5} className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "" : "rotate-180"}`} />
          </ListItem>
        </Typography>
      </MenuHandler>

      <MenuList className="w-full bg-transparent text-black p-0 !top-[218px]  z-100 border-none !border-0 shadow-none flex justify-center pb-4 outline-none focus:ring-0">
        <div className="w-full cursor-pointer max-w-screen-2xl bg-white z-100 shadow-md  flex justify-center gap-8 p-8 border-none outline-none">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mx-16 w-[80%]">
            {/* Column 1 */}
            <div className="flex gap-4 pr-4  ">
              <div className="flex items-start">{/* <College /> */}</div>
              <div className="flex flex-col gap-2">
                <ul className="list-none text-[#1D1D1F] text-[16px] leading-10">
                  <Link href="/about">
                    <li>About the CEC Campus</li>
                  </Link>
                </ul>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex gap-4 pr-4  ">
              <div className="flex items-start">{/* <Employees /> */}</div>
              <div className="flex flex-col gap-2">
                <ul className="list-none text-[#1D1D1F] text-[16px] leading-10">
                  <Link href="/legacy">
                    <li>Institute Legacy</li>
                  </Link>
                  
                </ul>
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex gap-4 pr-4  ">
              <div className="flex items-start">{/* <Certicficate /> */}</div>
              <div className="flex flex-col gap-2">
                <ul className="list-none text-[#1D1D1F] text-[16px] leading-10">
                  <Link href="/administration">
                    <li>Administration</li>
                  </Link>
                </ul>
              </div>
            </div>

            {/* Column 4 */}
            <div className="flex gap-4 ">
              <div className="flex items-start">{/* <HandShake /> */}</div>
              <div className="flex flex-col gap-2">
                <ul className="list-none text-[#1D1D1F] text-[16px] leading-10">
                  <Link href="/admission">
                    <li>Admissions</li>
                  </Link>
                 
                </ul>
              </div>
            </div>
            <div className="flex gap-4 ">
              <div className="flex items-start">{/* <HandShake /> */}</div>
              <div className="flex flex-col gap-2">
                <ul className="list-none text-[#1D1D1F] text-[16px] leading-10">
                  <Link href="/infrastructure">
                    <li>Infrastructure</li>
                  </Link>
                 
                </ul>
              </div>
            </div>
          </div>
        </div>
      </MenuList>
    </Menu>
  );
}
