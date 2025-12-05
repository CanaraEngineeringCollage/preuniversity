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
        <p className="lg2:text-2xl lg:text-lg text-[#2A2A2A]  pt-4  text-center mb-6 font-medium px-2">
          Find the program that fuels your passion and shapes your future
        </p>
        <div className="inline-flex items-center border border-gray-300 rounded-full mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setSelectedButton(tab.id);
                setData(tab.id === "Science" ? dummyFunctionDepartmentData : dummyFunctionDepartmentDataCommerce);
              }} className={`relative px-6 py-1.5 text-base sm:text-lg font-medium text-gray-700 rounded-full transition-colors duration-200 focus:outline-none`}
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
              <span className={`relative z-10 ${selectedButton === tab.id ? "text-white" : "text-gray-700"}`}>{tab.label}</span>
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
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h2>
                <Link href={item.link} className="underline text-base">
                  Learn More
                </Link>
              </div>
            </SwiperSlide>
          ))}

        </Swiper>
      </div>
      <div className="flex justify-end items-center mt-9 me-6 md:me-16 gap-4">
        {/* Play/Pause Button with Progress Circle */}

        {/* Navigation Buttons */}
        <div className="flex gap-2">
          <button onClick={() => swiperRef.current?.slidePrev()}>
            <PreviewIcon />
          </button>
          <button onClick={() => swiperRef.current?.slideNext()}>
            <NextIcon />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExploreStream;
