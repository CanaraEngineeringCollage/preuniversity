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
// import { Pause, Play } from "@/components/Icons/Icons";

interface DataItem {
  title: string;
  icon: string;
}

const ExploreStream = () => {
  const dummyFunctionDepartmentData: DataItem[] = [
    {
      title: "Physics, Chemistry, Mathematics & Biology (PCMB)",
      icon: "/svgs/homapageCarousalSvg/1.svg",
    },
    {
      title: "Physics, Chemistry, Mathematics & Electronics (PCME)",
      icon: "/svgs/homapageCarousalSvg/2.svg",
    },
    {
      title: "Physics, Chemistry, Mathematics & Computer Science (PCMC)",
      icon: "/svgs/homapageCarousalSvg/3.svg",
    },
    {
      title: "Physics, Chemistry, Mathematics & Statistics (PCMS)",
      icon: "/svgs/homapageCarousalSvg/4.svg",
    },
    {
      title: "Physics, Chemistry, Mathematics & Biology (PCMB)",
      icon: "/svgs/homapageCarousalSvg/1.svg",
    },
    {
      title: "Physics, Chemistry, Mathematics & Electronics (PCME)",
      icon: "/svgs/homapageCarousalSvg/2.svg",
    },
    {
      title: "Physics, Chemistry, Mathematics & Computer Science (PCMC)",
      icon: "/svgs/homapageCarousalSvg/3.svg",
    },
    {
      title: "Physics, Chemistry, Mathematics & Statistics (PCMS)",
      icon: "/svgs/homapageCarousalSvg/4.svg",
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
    <section className="my-16">
      <div className="flex flex-col items-center ">
        <h1 className="leading-[1.1] md:text-3xl lg:text-4xl lg2:text-[45px] text-3xl text-center   font-bold text-black ">
          Explore Our Stream Combinations
        </h1>
        <p className="lg2:text-2xl lg:text-lg text-[#86868B]  pt-4  text-center mb-6 font-medium px-2">
          Find the program that fuels your passion and shapes your future
        </p>
        <div className="inline-flex items-center border border-gray-300 rounded-full mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedButton(tab.id)}
              className={`relative px-6 py-1.5 text-base sm:text-lg font-medium text-gray-700 rounded-full transition-colors duration-200 focus:outline-none`}
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
      <div className="md:ml-32 ml-5">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 25 },
            1400: { slidesPerView: 5, spaceBetween: 25 },
          }}
          speed={1000}
          className="mySwiper"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {data?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="max-w-sm h-[25vh] lg:h-[30vh] xl:h-auto text-black p-6 bg-[#ffffff]  rounded-2xl">
                <div className="mb-4">
                  <Image src={item.icon} alt="Mental Health Icon" width={30} height={30} />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h2>
                {/* <p className="text-sm text-gray-600">{item.description}</p> */}
                <a href="" className="underline text-base">
                  Learn More
                </a>
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
