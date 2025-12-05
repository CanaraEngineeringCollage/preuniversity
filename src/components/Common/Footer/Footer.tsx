import Image from "next/image";
import { Instagram, Meta, Yt } from "../../../../public/icons";
import Link from "next/link";
import { FC, useState } from "react";
import { motion } from "framer-motion";

// Data arrays for footer sections
const aboutLinks = [
  { data: "About the College", links: "/about" },
  { data: "Founder", links: "/founder" },
  { data: "Management", links: "/management" },
  { data: "Facilities", links: "/facilities" },
];

const admissionLinks = [
  { data: "Admissions", links: "/admission" },
  // { data: "Streams", links: "/about" },
  { data: "Fee Portal", links: "/fee-portal" },
];

const examLinks = [
  { data: "Exam Results", links: "/exam-results" },
  { data: "Exam Circulars", links: "/exam-circulars" },
  { data: "Question Bank", links: "/question-bank" },
];

const buzzLinks = [{ data: "Buzz", links: "/buzz" }];

const eventLinks = [
  { data: "Footprints", links: "/footprints" },
  { data: "Mat Kabaddi", links: "/mat-kabaddi" },
];

interface FooterListProps {
  data: { data: string; links: string }[];
}

export default function Footer() {
  // State for collapsible sections on mobile
  const [aboutIsOpen, setAboutIsOpen] = useState<boolean>(false);
  const [admissionIsOpen, setAdmissionIsOpen] = useState<boolean>(false);
  const [examIsOpen, setExamIsOpen] = useState<boolean>(false);
  const [buzzIsOpen, setBuzzIsOpen] = useState<boolean>(false);
  const [eventIsOpen, setEventIsOpen] = useState<boolean>(false);

  return (
    <footer className="bg-[#001A48] text-white">
      {/* Desktop Version */}
      <div className="lg:block hidden">
        <div className="max-w-6xl text-base mx-auto px-4 py-16 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
          <div className="flex justify-start">
            <FooterList data={aboutLinks} />
          </div>
          <div className="flex justify-center">
            <FooterList data={admissionLinks} />
          </div>
          <div className="flex justify-center">
            <FooterList data={examLinks} />
          </div>
          <div className="flex justify-end">
            <FooterList data={buzzLinks} />
          </div>
          <div className="flex justify-center">
            <FooterList data={eventLinks} />
          </div>
        </div>

        <hr className="border-gray-600 max-w-6xl my-4 mx-auto" />

        {/* Logo and Social */}
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <Link href="/"><div className="flex items-center">
            <Image src="/svgs/footerLogo.svg" alt="svg" width={200} height={200} className="w-40 cursor-pointer sm:w-48 md:w-64" />
          </div></Link>
          <div className="flex flex-col items-center md:items-end">
            <span className="text-xs font-bold mb-2">Follow Us</span>
            <div className="flex space-x-3 text-white">
           <Link href="https://www.instagram.com/canara_pu_official/?hl=en" target="_blank"> <Instagram /></Link>
              <Link href="https://www.youtube.com/@canarapreuniversitycollege7891" target="_blank"><Yt /></Link>
              <Link href="https://www.facebook.com/canarapreuniversity/" target="_blank"><Meta /></Link>
            </div>
          </div>
        </div>

        <hr className="border-gray-600 max-w-6xl my-4 mx-auto" />

        {/* Bottom */}
        <div className="max-w-6xl text-[12px] text-[#6b7a95] mx-auto px-4 pt-4 pb-10 flex flex-col items-center text-center md:flex-row md:justify-between md:text-left">
          <p>Copyright © {new Date().getFullYear()} Canara High School Association. All rights reserved.</p>
          <div className="space-x-2 mt-2 md:mt-0">
            <Link href="/privacy-policy" className="">
              Privacy Policy
            </Link>
            <span>|</span>
          <Link href="/privacy-policy" className="">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="lg:hidden px-6">
        <div className="space-y-4 py-10">
          <FooterSection title="About Canara PU College" data={aboutLinks} isOpen={aboutIsOpen} setIsOpen={setAboutIsOpen} />
          <FooterSection title="About Admissions" data={admissionLinks} isOpen={admissionIsOpen} setIsOpen={setAdmissionIsOpen} />
          <FooterSection title="Student Resources" data={examLinks} isOpen={examIsOpen} setIsOpen={setExamIsOpen} />
          <FooterSection title="Buzz" data={buzzLinks} isOpen={buzzIsOpen} setIsOpen={setBuzzIsOpen} />
          <FooterSection title="Fest Pages" data={eventLinks} isOpen={eventIsOpen} setIsOpen={setEventIsOpen} />
        </div>

        <hr className="border-gray-600 my-4 hidden lg:block" />

        {/* Mobile Logo and Social Icons */}
        <div className="flex flex-col items-center py-6">
          <Link href="/"><div className="flex items-center">
            <Image src="/svgs/footerLogo.svg" alt="svg" width={200} height={200} className="w-56" />
          </div></Link>
          <div className="mt-4">
            <span className="text-xs font-bold mb-2 block text-center">Follow Us</span>
            <div className="flex space-x-3 justify-center">
             
             <Link href="https://www.instagram.com/canara_pu_official/?hl=en" target="_blank"> <Instagram /></Link>
            <Link href="https://www.youtube.com/@canarapreuniversitycollege7891" target="_blank"><Yt /></Link>
              <Link href="https://www.facebook.com/canarapreuniversity/" target="_blank"><Meta /></Link>
            </div>
          </div>
        </div>

        <hr className="border-gray-600 my-4" />

        {/* Mobile Bottom Bar */}
        <div className="text-[12px] text-[#6b7a95] pt-4 pb-10 text-center">
          <p className="mb-2">Copyright © {new Date().getFullYear()} Canara High School Association. All rights reserved.</p>
          <div className="space-x-2">
            <Link href="/privacy-policy" className="">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/privacy-policy" className=""> 
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Reusable Footer List Component
const FooterList: FC<FooterListProps> = ({ data }) => {
  return (
    <ul className="cursor-pointer text-white w-32">
      {data.map((item, index) => {
        const isExternal = item.links.startsWith("http");

        return (
          <Link
            key={index}
            href={item.links}
            target={isExternal ? "_blank" : "_self"}
            rel={isExternal ? "noopener noreferrer" : undefined}
          >
            <li className="pb-3">{item.data}</li>
          </Link>
        );
      })}
    </ul>
  );
};


// Arrow Icon for Mobile Collapsible Sections
const ArrowIcon = ({ isOpen }: { isOpen: boolean }) => (
  <motion.svg
    className="inline-block ml-2 w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    initial={false}
    animate={{ rotate: isOpen ? 180 : 0 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </motion.svg>
);

// Reusable Footer Section Component for Mobile
const FooterSection: FC<{
  title: string;
  data: { data: string; links: string }[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}> = ({ title, data, isOpen, setIsOpen }) => (
  <div className="border-b border-gray-600 pb-2">
    {title !== "Buzz" ? (
      <div onClick={() => setIsOpen(!isOpen)} className="flex items-center text-[#8f9aaf] justify-between font-semibold cursor-pointer py-2">
        {title}
        <ArrowIcon isOpen={isOpen} />
      </div>
    ) : (
      <Link href="/buzz"><div className="flex items-center justify-between text-[#8f9aaf] font-semibold cursor-pointer py-2">{title}</div></Link>
    )}
    {isOpen && <FooterList data={data} />}
  </div>
);
