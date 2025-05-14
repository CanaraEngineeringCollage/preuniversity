"use client";
import { ListItem, Menu, MenuHandler, MenuList, Typography } from "@material-tailwind/react";
import { useState } from "react";
// import { FaChevronUp } from "react-icons/fa6";
// import { College, Employees, Certicficate, HandShake } from "../../../../components/Icons/Icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FaChevronUp } from "react-icons/fa6";

export default function Courses() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} offset={{ mainAxis: 20 }} placement="bottom" allowHover={true}>
      <MenuHandler>
        <Typography as="div" className="text-sm xl:text-base" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
          <ListItem
            className={`flex items-center gap-2 ${
              isMenuOpen ? "opacity-100" : "opacity-80"
            } py-2 pr-4  transition-colors ease-in-out duration-300  bg-transparent font-semibold hover:bg-transparent shadow-none rounded-none outline-none focus:ring-0`}
            selected={isMenuOpen || isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
          >
            Courses
            <FaChevronUp strokeWidth={2.5} className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "" : "rotate-180"}`} />
          </ListItem>
        </Typography>
      </MenuHandler>

      <MenuList className="w-full bg-transparent overflow-hidden text-black p-0  z-100 border-none !border-0 shadow-none flex justify-center pb-4 outline-none focus:ring-0">
        {isMenuOpen && (
          <div className="  cursor-pointer w-full bg-white z-100 shadow-md rounded-xl flex justify-center gap-8 p-8 border-none outline-none">
            <div className="flex  flex-col gap-12">
              <div className="flex flex-col ">
                <div className="flex ml-[194px] gap-2 mb-5">
                  <Image src="/nav1.svg" alt="" width={20} height={20} />
                  <h1 className="text-[16px] font-bold">Science Streams</h1>
                </div>
                <div className="flex justify-center">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-16 w-[75%]">
                    {/* Column 1 */}
                    <div className="flex gap-4 pr-4 ">
                      <div className="flex items-start"></div>
                      <div className="flex flex-col gap-2">
                        <Link href="/about/about-cec">
                          <p className="text-base text-[#1D1D1F]">Physics, Chemistry, Mathematics & Biology (PCMB)</p>
                        </Link>
                      </div>
                    </div>

                    {/* Column 2 */}
                    <div className="flex gap-4 pr-4 ">
                      <div className="flex items-start">{/* <Employees /> */}</div>
                      <div className="flex flex-col gap-2">
                        <Link href="/about/about-cec">
                          <p className="text-base text-[#1D1D1F]">Physics, Chemistry, Mathematics & Electronics (PCME)</p>
                        </Link>
                      </div>
                    </div>

                    {/* Column 3 */}
                    <div className="flex gap-4 pr-4 ">
                      <div className="flex items-start">{/* <Certicficate /> */}</div>
                      <div className="flex flex-col gap-2">
                        <Link href="/about/about-cec">
                          <p className="text-base text-[#1D1D1F]">Physics, Chemistry, Mathematics & Computer Science (PCMC)</p>
                        </Link>
                      </div>
                    </div>

                    {/* Column 4 */}
                    <div className="flex gap-4 ">
                      <div className="flex items-start">{/* <HandShake /> */}</div>
                      <div className="flex flex-col gap-2">
                        <Link href="/about/about-cec">
                          <p className="text-base text-[#1D1D1F]">Physics, Chemistry, Mathematics & Statistics (PCMS)</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col ">
                  <div className="flex ml-[194px] gap-2 mb-6">
                    <Image src="/nav2.svg" alt="" width={20} height={20} />
                    <h1 className="text-[16px] font-bold ">Science Streams</h1>
                  </div>
                  <div className="flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-16 w-[75%]">
                      {/* Column 1 */}
                      <div className="flex gap-4 pr-4 ">
                        <div className="flex items-start"></div>
                        <div className="flex flex-col gap-2">
                          <Link href="/about/about-cec">
                            <p className="text-base text-[#1D1D1F]">Basic Maths, Statistics, Business Studies & Accountancy (BSBA)</p>
                          </Link>
                        </div>
                      </div>

                      {/* Column 2 */}
                      <div className="flex gap-4 pr-4 ">
                        <div className="flex items-start">{/* <Employees /> */}</div>
                        <div className="flex flex-col gap-2">
                          <Link href="/about/about-cec">
                            <p className="text-base text-[#1D1D1F]">Basic Maths, Economics, Business Studies & Accountancy (BEBA)</p>
                          </Link>
                        </div>
                      </div>

                      {/* Column 3 */}
                      <div className="flex gap-4 pr-4 ">
                        <div className="flex items-start">{/* <Certicficate /> */}</div>
                        <div className="flex flex-col gap-2">
                          <Link href="/about/about-cec">
                            <p className="text-base text-[#1D1D1F]">Statistics, Economics, Business Studies & Accountancy (SEBA)</p>
                          </Link>
                        </div>
                      </div>

                      {/* Column 4 */}
                      <div className="flex gap-4 ">
                        <div className="flex items-start">{/* <HandShake /> */}</div>
                        <div className="flex flex-col gap-2">
                          <Link href="/about/about-cec">
                            <p className="text-base text-[#1D1D1F]">Computer Science, Statistics, Business Studies & Accountancy (CSBA)</p>
                          </Link>
                        </div>
                      </div>
                      <div className="flex gap-4 ">
                        <div className="flex items-start">{/* <HandShake /> */}</div>
                        <div className="flex flex-col gap-2">
                          <Link href="/about/about-cec">
                            <p className="text-base text-[#1D1D1F]">History, Economics, Business Studies & Accountancy (HEBA)</p>
                          </Link>
                        </div>
                      </div>
                      <div className="flex gap-4 ">
                        <div className="flex items-start">{/* <HandShake /> */}</div>
                        <div className="flex flex-col gap-2">
                          <Link href="/about/about-cec">
                            <p className="text-base text-[#1D1D1F]">Computer Science, Economics, Business Studies & Accountancy (CEBA)</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </MenuList>
    </Menu>
  );
}
