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
            } py-2 pr-4  transition ease-in-out duration-300 text-[18px] font-bold  bg-transparent text-white hover:bg-transparent shadow-none rounded-none outline-none focus:ring-0`}
            selected={isMenuOpen || isMobileMenuOpen}
            placeholder=""
            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
          >
            About
            <FaChevronUp strokeWidth={2.5} className={`hidden h-3.5 w-3.5 transition-transform lg:block ${isMenuOpen ? "" : "rotate-180"}`} />
          </ListItem>
        </Typography>
      </MenuHandler>

     <MenuList className="w-full bg-white !top-[195px] xl:!top-[212px] text-[#1D1D1F] p-0 z-100 border-none !border-0 shadow-none flex justify-center  outline-none focus:ring-0">
  <div className="w-[80%]    p-8 border-none outline-none">
    <div className="flex justify-evenly">
      
      {/* Column 1 */}
      <div className="space-y-2">
        <ul className="text-[#1D1D1F] text-[16px] leading-10">
          <Link href="/about"><li>About the CEC Campus</li></Link>
        </ul>
      </div>

      {/* Column 2 */}
      <div className="space-y-2">
        <ul className="text-[#1D1D1F] text-[16px] leading-10">
          <Link href="/legacy"><li>Institute Legacy</li></Link>
        </ul>
      </div>

      {/* Column 3 */}
      <div className="space-y-2">
        <ul className="text-[#1D1D1F] text-[16px] leading-10">
          <Link href="/administration"><li>Administration</li></Link>
        </ul>
      </div>

      {/* Column 4 */}
      <div className="space-y-2">
        <ul className="text-[#1D1D1F] text-[16px] leading-10">
          <Link href="/admission"><li>Admissions</li></Link>
        </ul>
      </div>

      {/* Column 5 */}
      <div className="space-y-2">
        <ul className="text-[#1D1D1F] text-[16px] leading-10">
          <Link href="/infrastructure"><li>Infrastructure</li></Link>
        </ul>
      </div>

    </div>
  </div>
</MenuList>

    </Menu>
  );
}
