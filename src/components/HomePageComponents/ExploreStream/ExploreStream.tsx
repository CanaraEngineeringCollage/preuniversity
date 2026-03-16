"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { NextIcon, PreviewIcon } from "../../../../public/icons";
import streamsNav from '@/utils/streamData/stream'
import Link from "next/link";
import { strict } from "assert";
// import { Pause, Play } from "@/components/Icons/Icons";

interface DataItem {
  title: string;
  icon: string;
  description: string;
  link: string;
}

const ExploreStream = () => {
  const dummyFunctionDepartmentData: DataItem[] = [
    {
      title: "Physics, Chemistry, Mathematics & Biology (PCMB)",
      icon: "images/homePageImages/pcmb.svg",
      description: "cscsc",
      link: "streams/pcmb"
    },
    {
      title: "Physics, Chemistry, Mathematics & Electronics (PCME)",
      icon: "images/homePageImages/pcme.svg",
      description: "bsbsb",
      link: "streams/pcme"


    },
    {
      title: "Physics, Chemistry, Mathematics & Computer Science (PCMC)",
      icon: "images/homePageImages/pcmc.svg",
      description: "asas",
      link: "streams/pcmc"


    },
    {
      title: "Physics, Chemistry, Mathematics & Statistics (PCMS)",
      icon: "images/homePageImages/pcms.svg",
      description: "asas",
      link: "streams/pcms"


    },
       {
      title: "Physics, Chemistry, Mathematics & Biology (PCMB)",
      icon: "images/homePageImages/pcmb.svg",
      description: "cscsc",
      link: "streams/pcmb"
    },
    {
      title: "Physics, Chemistry, Mathematics & Electronics (PCME)",
      icon: "images/homePageImages/pcme.svg",
      description: "bsbsb",
      link: "streams/pcme"


    },
    {
      title: "Physics, Chemistry, Mathematics & Computer Science (PCMC)",
      icon: "images/homePageImages/pcmc.svg",
      description: "asas",
      link: "streams/pcmc"


    },
    {
      title: "Physics, Chemistry, Mathematics & Statistics (PCMS)",
      icon: "images/homePageImages/pcms.svg",
      description: "asas",
      link: "streams/pcms"


    },
    
  ];

  const dummyFunctionDepartmentDataCommerce: DataItem[] = [
    {
      title: "Computer Science, Statistics, Business Studies, Accountancy (CSBA) ",
      icon: "images/homePageImages/csba.svg",
      description: "esas",
      link: "streams/csba"


    },
    {
      title: " Basic Maths, Statistics, Business Studies, Accountancy (BSBA) ",
      icon: "images/homePageImages/bsba.svg",
      description: "asas",
      link: "streams/bsba"


    },

    {
      title: " Statistics, Economics, Business Studies, Accountancy (SEBA) ",
      icon: "images/homePageImages/seba.svg",
      description: "asas",
      link: "streams/seba"


    },
      {
      title: "Computer Science, Economics, Business Studies & Accountancy  (CEBA) ",
      icon: "images/homePageImages/ceba.svg",
      description: "esas",
      link: "streams/ceba"


    },
    {
      title: " History, Economics, Business Studies, Accountancy (HEBA)",
      icon: "images/homePageImages/heba.svg",
      description: "asas",
      link: "streams/heba"


    },

    {
      title: "Basic Maths, Economics, Business Studies, Accountancy (BEBA)",
      icon: "images/homePageImages/beba.svg",
      description: "asas",
      link: "streams/beba"


    },


     {
      title: "Computer Science, Statistics, Business Studies, Accountancy (CSBA) ",
      icon: "images/homePageImages/csba.svg",
      description: "esas",
      link: "streams/csba"


    },
    {
      title: " Basic Maths, Statistics, Business Studies, Accountancy (BSBA) ",
      icon: "images/homePageImages/bsba.svg",
      description: "asas",
      link: "streams/bsba"


    },

    {
      title: " Statistics, Economics, Business Studies, Accountancy (SEBA) ",
      icon: "images/homePageImages/seba.svg",
      description: "asas",
      link: "streams/seba"


    },
          {
      title: "Computer Science, Economics, Business Studies & Accountancy  (CEBA) ",
      icon: "images/homePageImages/ceba.svg",
      description: "esas",
      link: "streams/ceba"


    },
    {
      title: " History, Economics, Business Studies, Accountancy (HEBA)",
      icon: "images/homePageImages/heba.svg",
      description: "asas",
      link: "streams/heba"


    },

    {
      title: "Basic Maths, Economics, Business Studies, Accountancy (BEBA)",
      icon: "images/homePageImages/beba.svg",
      description: "asas",
      link: "streams/beba"


    },




  ];

const [data, setData] = useState<DataItem[]>(dummyFunctionDepartmentData);
  const swiperRef = useRef<SwiperType | null>(null);
  const autoplayDelay = 3000; // Swiper autoplay delay in ms
  const [selectedButton, setSelectedButton] = useState("Science");
  const tabs = [
    { id: "Science", label: "Science" },
    { id: "Commerce", label: "Commerce" },
  ];

  useEffect(() => {
    setData(dummyFunctionDepartmentData);
  }, []);



  return (
    <section className=" my-14 lg:my-16 px-5 md:px-0 ">
      <div className="flex flex-col items-center ">
        <h1 className="leading-[1.1] md:text-3xl lg:text-4xl lg2:text-[45px] text-3xl text-center   font-bold text-[#1D1D1F] ">
          Explore Our Stream Combinations
        </h1>
        <p className="lg2:text-xl lg:text-xl text-[#2A2A2A]  pt-4  text-center mb-6 font-medium px-2">
          Find the program that fuels your passion and shapes your future
        </p>
      <div className="inline-flex items-center border border-gray-300 rounded-full mb-10">
  {tabs.map((tab) => (
    <button
      key={tab.id}
      onClick={() => {
        setSelectedButton(tab.id);
        setData(
          tab.id === "Science"
            ? dummyFunctionDepartmentData
            : dummyFunctionDepartmentDataCommerce
        );
      }}
      className={`relative w-36 py-1.5 text-base sm:text-lg font-medium text-[#2A2A2A] rounded-full transition-colors duration-200 focus:outline-none`}
      style={{
        WebkitTapHighlightColor: "transparent",
      }}
    >
      {selectedButton === tab.id && (
        <motion.span
          layoutId="bubble"
          className="absolute inset-0 z-0 bg-[#3C71D7] rounded-full"
          transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
        />
      )}
      <span
        className={`relative z-10 ${
          selectedButton === tab.id ? "text-white" : "text-[#2A2A2A]"
        }`}
      >
        {tab.label}
      </span>
    </button>
  ))}
</div>
      </div>
      <div className="lg:max-w-[95%]   xl:max-w-[87.5%] ml-auto">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
         breakpoints={{
    640: { slidesPerView: 1, spaceBetween: 20 },
    768: { slidesPerView: 2, spaceBetween: 20 },
    1024: { slidesPerView: 3, spaceBetween: 24 },
    1280: { slidesPerView: 3.5, spaceBetween: 24 },
    1536: { slidesPerView: 4, spaceBetween: 24 },
  }}
          speed={1000}
          className="mySwiper"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {data?.map((item, index) => (
            <SwiperSlide key={index}>
             <div className=" h-[200px]  text-[#1D1D1F] p-6 bg-white rounded-2xl flex flex-col justify-between">

                <div className="mb-4">
                  <Image src={item.icon} alt="Mental Health Icon" width={30} height={30} />
                </div>
                <h2 className="text-xl font-semibold text-[#2A2A2A] mb-2">{item.title}</h2>
                <Link href={item.link} className="underline text-base">
                  Learn More
                </Link>
              </div>
            </SwiperSlide>
          ))}

        </Swiper>
      </div>
      <div className="flex justify-end items-center mt-9 me-6 md:me-16 gap-4">

        {/* Navigation Buttons */}
        <div className="flex gap-2">
          {/* PREVIOUS BUTTON (FIXED BACKGROUND & DIRECTION) */}
          <button onClick={() => swiperRef.current?.slidePrev()}>
            <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_621_394)">
                <rect x="0.222656" y="0.421875" width="36" height="36" rx="18" fill="#D2D2D7" fillOpacity="0.64" />
                <path
                  d="M21.7816 12.4839L15.8406 18.4059L21.7447 24.3659C22.3276 24.9549 22.3247 25.9039 21.7357 26.4869C21.4437 26.7769 21.0617 26.9219 20.6797 26.9219C20.2937 26.9219 19.9077 26.7739 19.6147 26.4779L12.6577 19.4559C12.0757 18.8679 12.0777 17.9219 12.6637 17.3379L19.6637 10.3599C20.2487 9.77488 21.2007 9.77588 21.7847 10.3629C22.3697 10.9499 22.3676 11.8999 21.7816 12.4839Z"
                  fill="black"
                  fillOpacity="0.56"
                />
              </g>
              <defs>
                <clipPath id="clip0_621_394">
                  <rect x="0.222656" y="0.421875" width="36" height="36" rx="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
          
          {/* NEXT BUTTON */}
          <button onClick={() => swiperRef.current?.slideNext()}>
            <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_621_397)">
                <rect x="0.222656" y="0.421875" width="36" height="36" rx="18" fill="#D2D2D7" fillOpacity="0.64"/>
                <path d="M23.7814 17.3379C24.3674 17.9219 24.3694 18.8679 23.7874 19.4559L16.8304 26.4779C16.5374 26.7739 16.1514 26.9219 15.7654 26.9219C15.3834 26.9219 15.0014 26.7769 14.7094 26.4869C14.1204 25.9039 14.1174 24.9549 14.7004 24.3659L20.6045 18.4059L14.6635 12.4839C14.0775 11.8999 14.0755 10.9498 14.6605 10.3629C15.2445 9.77588 16.1965 9.77488 16.7815 10.3599L23.7814 17.3379Z" fill="black" fillOpacity="0.56"/>
              </g>
              <defs>
                <clipPath id="clip0_621_397">
                  <rect x="0.222656" y="0.421875" width="36" height="36" rx="18" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExploreStream;