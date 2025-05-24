"use client";
import { ListItem, Menu, MenuHandler, MenuList, Typography } from "@material-tailwind/react";
import { useState } from "react";
// import { FaChevronUp } from "react-icons/fa6";
// import { College, Employees, Certicficate, HandShake } from "../../../../components/Icons/Icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FaChevronUp } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Courses() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const cardVariants = {
    initial: (index: number) => ({
      x: index % 2 === 0 ? -100 : 100,
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#005580",
      color: "white",
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} offset={{ mainAxis: 20 }} placement="bottom" allowHover={true}>
      <MenuHandler>
        <Typography as="div" className="text-sm xl:text-base" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
          <ListItem
            className={`flex items-center gap-2 ${
              isMenuOpen ? "opacity-100" : "opacity-100"
            } py-2 pr-4  transition-colors ease-in-out duration-300  bg-transparent font-semibold hover:bg-transparent shadow-none rounded-none outline-none focus:ring-0}`}
            selected={isMenuOpen || isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
          >
            Courses
            <FaChevronUp strokeWidth={2.5} className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "" : "rotate-180"}`} />
          </ListItem>
        </Typography>
      </MenuHandler>

      <MenuList className="w-full bg-transparent !top-[218px] overflow-hidden text-black p-0  z-100 border-none !border-0 shadow-none flex justify-center pb-4 outline-none focus:ring-0">
        {isMenuOpen && (
          <div className="cursor-pointer w-full bg-white z-100 shadow-md flex justify-center gap-8 p-8 border-none outline-none">
            <div className="flex flex-col gap-12">
              <div className="flex flex-col">
                <div className="flex ml-[194px] gap-2 mb-5">
                  <Image src="/nav1.svg" alt="" width={20} height={20} />
                  <h1 className="text-[16px] font-bold">Science Streams</h1>
                </div>
                <div className="flex justify-center">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-16 w-[75%]">
                    {/* Column 1 */}
                    <motion.div
                      custom={0}
                      variants={cardVariants}
                      initial="initial"
                      animate="animate"
                      whileHover="hover"
                      className="flex gap-4 pr-4"
                    >
                      <div className="flex items-start"></div>
                      <div className="flex flex-col gap-2">
                        <Link href="/courses/pcmb">
                          <p className={`text-base ${pathname.includes("/courses/pcmb") ? "text-primary" : "text-gray-500"}`}>Physics, Chemistry, Mathematics & Biology (PCMB)</p>
                        </Link>
                      </div>
                    </motion.div>

                    {/* Column 2 */}
                    <motion.div
                      custom={1}
                      variants={cardVariants}
                      initial="initial"
                      animate="animate"
                      whileHover="hover"
                      className="flex gap-4 pr-4"
                    >
                      <div className="flex items-start"></div>
                      <div className="flex flex-col gap-2">
                        <Link href="/courses/pcme">
                          <p className={`text-base ${pathname.includes("/courses/pcme") ? "text-primary" : "text-gray-500"}`}>Physics, Chemistry, Mathematics & Electronics (PCME)</p>
                        </Link>
                      </div>
                    </motion.div>

                    {/* Column 3 */}
                    <motion.div
                      custom={2}
                      variants={cardVariants}
                      initial="initial"
                      animate="animate"
                      whileHover="hover"
                      className="flex gap-4 pr-4"
                    >
                      <div className="flex items-start"></div>
                      <div className="flex flex-col gap-2">
                        <Link href="/courses/pcmc">
                          <p className={`text-base ${pathname.includes("/courses/pcmc") ? "text-primary" : "text-gray-500"}`}>Physics, Chemistry, Mathematics & Computer Science (PCMC)</p>
                        </Link>
                      </div>
                    </motion.div>

                    {/* Column 4 */}
                    <motion.div
                      custom={3}
                      variants={cardVariants}
                      initial="initial"
                      animate="animate"
                      whileHover="hover"
                      className="flex gap-4"
                    >
                      <div className="flex items-start"></div>
                      <div className="flex flex-col gap-2">
                        <Link href="/courses/pcms">
                          <p className={`text-base ${pathname.includes("/courses/pcms") ? "text-primary" : "text-gray-500"}`}>Physics, Chemistry, Mathematics & Statistics (PCMS)</p>
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col">
                  <div className="flex ml-[194px] gap-2 mb-6">
                    <Image src="/nav2.svg" alt="" width={20} height={20} />
                    <h1 className="text-[16px] font-bold">Commerce Streams</h1>
                  </div>
                  <div className="flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-16 w-[75%]">
                      {/* Column 1 */}
                      <motion.div
                        custom={4}
                        variants={cardVariants}
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                        className="flex gap-4 pr-4"
                      >
                        <div className="flex items-start"></div>
                        <div className="flex flex-col gap-2">
                          <Link href="/courses/bsba">
                            <p className={`text-base ${pathname.includes("/courses/bsba") ? "text-primary" : "text-gray-500"}`}>Basic Maths, Statistics, Business Studies & Accountancy (BSBA)</p>
                          </Link>
                        </div>
                      </motion.div>

                      {/* Column 2 */}
                      <motion.div
                        custom={5}
                        variants={cardVariants}
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                        className="flex gap-4 pr-4"
                      >
                        <div className="flex items-start"></div>
                        <div className="flex flex-col gap-2">
                          <Link href="/courses/beba">
                            <p className={`text-base ${pathname.includes("/courses/beba") ? "text-primary" : "text-gray-500"}`}>Basic Maths, Economics, Business Studies & Accountancy (BEBA)</p>
                          </Link>
                        </div>
                      </motion.div>

                      {/* Column 3 */}
                      <motion.div
                        custom={6}
                        variants={cardVariants}
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                        className="flex gap-4 pr-4"
                      >
                        <div className="flex items-start"></div>
                        <div className="flex flex-col gap-2">
                          <Link href="/courses/seba">
                            <p className={`text-base ${pathname.includes("/courses/seba") ? "text-primary" : "text-gray-500"}`}>Statistics, Economics, Business Studies & Accountancy (SEBA)</p>
                          </Link>
                        </div>
                      </motion.div>

                      {/* Column 4 */}
                      <motion.div
                        custom={7}
                        variants={cardVariants}
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                        className="flex gap-4"
                      >
                        <div className="flex items-start"></div>
                        <div className="flex flex-col gap-2">
                          <Link href="/courses/csba">
                            <p className={`text-base ${pathname.includes("/courses/csba") ? "text-primary" : "text-gray-500"}`}>Computer Science, Statistics, Business Studies & Accountancy (CSBA)</p>
                          </Link>
                        </div>
                      </motion.div>
                      <motion.div
                        custom={8}
                        variants={cardVariants}
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                        className="flex gap-4"
                      >
                        <div className="flex items-start"></div>
                        <div className="flex flex-col gap-2">
                          <Link href="/courses/heba">
                            <p className={`text-base ${pathname.includes("/courses/heba") ? "text-primary" : "text-gray-500"}`}>History, Economics, Business Studies & Accountancy (HEBA)</p>
                          </Link>
                        </div>
                      </motion.div>
                      <motion.div
                        custom={9}
                        variants={cardVariants}
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                        className="flex gap-4"
                      >
                        <div className="flex items-start"></div>
                        <div className="flex flex-col gap-2">
                          <Link href="/courses/ceba">
                            <p className={`text-base ${pathname.includes("/courses/ceba") ? "text-primary" : "text-gray-500"}`}>Computer Science, Economics, Business Studies & Accountancy (CEBA)</p>
                          </Link>
                        </div>
                      </motion.div>
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
