import Image from "next/image";
import { Instagram, Meta, Yt } from "../../../../public/icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#001A48] text-white">
      {/* Top Links */}
      <div className="max-w-6xl  text-base mx-auto px-4 py-10 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
        <div className="flex justify-center">
          <ul className="! cursor-pointer w-32">
            <Link href="/about"><li className="pb-3">About the College</li></Link>
            <Link href="/legacy"><li  className="pb-3">Institute Legacy</li></Link>
            <Link href="/administration"><li className="pb-3">Administration</li></Link>
            <Link href="/infrastructure"><li className="pb-3">Infrastructure</li></Link>
          </ul>
        </div>
        <div className="flex justify-center">
          <ul className=" cursor-pointer w-32">
            <Link href="/admission"><li className="pb-3">Admissions</li></Link>
            <Link href="/about"><li className="pb-3">Streams</li></Link>
           <Link href="/fee-portal"> <li className="pb-3">Fee Portal</li></Link>
          </ul>
        </div>
        <div className="flex justify-center">
          <ul className=" cursor-pointer w-32">
           <Link href="/exam-results"> <li className="pb-3">Exam Results</li></Link>
           <Link href="/about"> <li className="pb-3">Exam Circulars</li></Link>
           <Link href="/question-bank"> <li className="pb-3">Question Bank</li></Link>
          </ul>
        </div>
        <div className="flex justify-center">
          <ul className=" cursor-pointer w-32">
           <Link href="/buzz"> <li className="pb-3">Buzz</li></Link>
          </ul>
        </div>
        <div className="flex justify-center">
          <ul className=" cursor-pointer w-32">
           <Link href="/about"> <li className="pb-3">Footprints</li></Link>
           <Link href="/about"> <li className="pb-3">Mat Kabaddi</li></Link>
          </ul>
        </div>
      </div>

      <hr className="border-gray-600 max-w-6xl my-4 mx-auto" />

      {/* Logo and Social */}
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
        {/* Dummy Logos */}
        <div className="flex items-center">
          <Image
            src="/svgs/footerLogo.svg"
            alt="svg"
            width={200} // Reduced for mobile
            height={200}
            className="w-40 sm:w-48 md:w-64" // Responsive width
          />
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-center md:items-end">
          <span className="text-xs font-bold mb-2">Follow Us</span>
          <div className="flex space-x-3 text-white">
            <Instagram />
            <Yt />
            <Meta />
          </div>
        </div>
      </div>

      <hr className="border-gray-600 max-w-6xl my-4 mx-auto" />

      {/* Bottom */}
      <div className="max-w-6xl text-[12px] text-[#6b7a95] mx-auto px-4 pt-4 pb-10 flex flex-col items-center text-center md:flex-row md:justify-between md:text-left">
        <p>Copyright © 2025 Canara High School Association. All rights reserved.</p>
        <div className="space-x-2 mt-2 md:mt-0">
          <a href="#" className="">
            Privacy Policy
          </a>
          <span>|</span>
          <a href="#" className="">
            Terms of Use
          </a>
        </div>
      </div>
    </footer>
  );
}
