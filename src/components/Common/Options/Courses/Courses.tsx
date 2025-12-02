"use client";
import { ListItem, Menu, MenuHandler, MenuList, Typography } from "@material-tailwind/react";
import { useState } from "react";
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
  };

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} offset={{ mainAxis: 20 }} placement="bottom" allowHover={true}>
      <MenuHandler>
        <Typography as="div" className="text-sm xl:text-base">
          <ListItem
            className={`flex items-center gap-2 py-2 pr-4 text-[18px] transition-colors duration-300 bg-transparent font-semibold hover:bg-transparent shadow-none rounded-none outline-none`}
            selected={isMenuOpen || isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
          >
            Courses
            <FaChevronUp
              strokeWidth={2.5}
              className={`hidden h-3.5 w-3.5 transition-transform lg:block ${isMenuOpen ? "" : "rotate-180"}`}
            />
          </ListItem>
        </Typography>
      </MenuHandler>

<MenuList className="w-full bg-white !top-[195px] xl:!top-[212px] text-[#1D1D1F] p-0 shadow-none !border-none !outline-none !focus:outline-none">

        {isMenuOpen && (
          <div className="w-[75%] mx-auto p-10">
            <div className="flex flex-col gap-16">

              {/* ================= SCIENCE STREAMS ================= */}
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <Image src="/nav1.svg" alt="" width={20} height={20} />
                  <h1 className="text-[16px] font-bold">Science Streams</h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">

                  {/* PCMB */}
                  <motion.div custom={0} variants={cardVariants} initial="initial" animate="animate">
                    <Link href="/streams/pcmb">
                      <p className={`text-base ${pathname.includes("pcmb") ? "text-primary" : "text-gray-600"}`}>
                        Physics, Chemistry, Mathematics & Biology (PCMB)
                      </p>
                    </Link>
                  </motion.div>

                  {/* PCME */}
                  <motion.div custom={1} variants={cardVariants} initial="initial" animate="animate">
                    <Link href="/streams/pcme">
                      <p className={`text-base ${pathname.includes("pcme") ? "text-primary" : "text-gray-600"}`}>
                        Physics, Chemistry, Mathematics & Electronics (PCME)
                      </p>
                    </Link>
                  </motion.div>

                  {/* PCMC */}
                  <motion.div custom={2} variants={cardVariants} initial="initial" animate="animate">
                    <Link href="/streams/pcmc">
                      <p className={`text-base ${pathname.includes("pcmc") ? "text-primary" : "text-gray-600"}`}>
                        Physics, Chemistry, Mathematics & Computer Science (PCMC)
                      </p>
                    </Link>
                  </motion.div>

                  {/* PCMS */}
                  <motion.div custom={3} variants={cardVariants} initial="initial" animate="animate">
                    <Link href="/streams/pcms">
                      <p className={`text-base ${pathname.includes("pcms") ? "text-primary" : "text-gray-600"}`}>
                        Physics, Chemistry, Mathematics & Statistics (PCMS)
                      </p>
                    </Link>
                  </motion.div>

                </div>
              </div>

              {/* ================= COMMERCE STREAMS ================= */}
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <Image src="/nav2.svg" alt="" width={20} height={20} />
                  <h1 className="text-[16px] font-bold">Commerce Streams</h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">

                  {/* BSBA */}
                  <motion.div custom={4} variants={cardVariants} initial="initial" animate="animate">
                    <Link href="/streams/bsba">
                      <p className={`text-base ${pathname.includes("bsba") ? "text-primary" : "text-gray-600"}`}>
                        Basic Maths, Statistics, Business Studies & Accountancy (BSBA)
                      </p>
                    </Link>
                  </motion.div>

                  {/* BEBA */}
                  <motion.div custom={5} variants={cardVariants} initial="initial" animate="animate">
                    <Link href="/streams/beba">
                      <p className={`text-base ${pathname.includes("beba") ? "text-primary" : "text-gray-600"}`}>
                        Basic Maths, Economics, Business Studies & Accountancy (BEBA)
                      </p>
                    </Link>
                  </motion.div>

                  {/* SEBA */}
                  <motion.div custom={6} variants={cardVariants} initial="initial" animate="animate">
                    <Link href="/streams/seba">
                      <p className={`text-base ${pathname.includes("seba") ? "text-primary" : "text-gray-600"}`}>
                        Statistics, Economics, Business Studies & Accountancy (SEBA)
                      </p>
                    </Link>
                  </motion.div>

                  {/* HEBA */}
                  <motion.div custom={7} variants={cardVariants} initial="initial" animate="animate">
                    <Link href="/streams/heba">
                      <p className={`text-base ${pathname.includes("heba") ? "text-primary" : "text-gray-600"}`}>
                        History, Economics, Business Studies & Accountancy (HEBA)
                      </p>
                    </Link>
                  </motion.div>

                  {/* CSBA — moves automatically to next row */}
                  <motion.div custom={8} variants={cardVariants} initial="initial" animate="animate">
                    <Link href="/streams/csba">
                      <p className={`text-base ${pathname.includes("csba") ? "text-primary" : "text-gray-600"}`}>
                        Computer Science, Statistics, Business Studies & Accountancy (CSBA)
                      </p>
                    </Link>
                  </motion.div>

                </div>
              </div>

            </div>
          </div>
        )}
      </MenuList>
    </Menu>
  );
}
