"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
// import { Pause, Play } from "@/components/Icons/Icons";

interface DataItem {
  title: string;
  icon: string;
}





const ExploreStream = () => {

  const dummyFunctionDepartmentData:DataItem[]= [
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
  const [isPlay, setIsPlay] = useState(true);
  const [progress, setProgress] = useState(0);
  const autoplayDelay = 3000; // Swiper autoplay delay in ms
  const [selectedButton, setSelectedButton] = useState("Science");

  useEffect(() => {
    setData(dummyFunctionDepartmentData);
  }, []);

  // Handle play/pause toggle
  const togglePlayPause = () => {
    if (swiperRef.current) {
      if (isPlay) {
        swiperRef.current.autoplay.stop();
        setProgress(0); // Reset progress when pausing
      } else {
        swiperRef.current.autoplay.start();
      }
      setIsPlay(!isPlay);
    }
  };

  // Handle Swiper's autoplay time left to sync progress
  const handleAutoplayTimeLeft = (_swiper: SwiperType, _time: number, progress: number) => {
    // Progress is a value from 0 to 1; convert to 0-100 for the circle
    setProgress((1 - progress) * 100);
  };

  return (
    <section className="lg:ml-20    xl:ml-60">
      <div className="flex flex-col items-center pb-10">
       <h1 className="text-3xl md:text-[40px] text-center lg2:text-5xl  font-bold text-black pb-6 xl:pb-22">Explore Our Stream Combinations</h1>
       <p className="text-[23px] text-[#1D1D1F] mb-5">Find the program that fuels your passion and shapes your future</p>
      <div className="inline-flex items-center p-1 bg-white  rounded-full">
  <button
    onClick={() => setSelectedButton("Science")}
    className={`px-4 py-1.5 text-xl font-medium rounded-full transition-colors duration-200 ${
      selectedButton === "Science"
        ? "bg-[#3C71D7] text-white"
        : "text-gray-700"
    }`}
  >
    Science
  </button>
  <button
    onClick={() => setSelectedButton("Commerce")}
    className={`px-4 py-1.5 text-xl font-medium rounded-full transition-colors duration-200 ${
      selectedButton === "Commerce"
        ? "bg-[#3C71D7] text-white"
        : "text-gray-700"
    }`}
  >
    Commerce
  </button>
</div>

       </div>
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
        }}
        className="mySwiper"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onAutoplayTimeLeft={handleAutoplayTimeLeft} // Sync progress with autoplay
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="max-w-sm h-[25vh] lg:h-[30vh] p-6 bg-[#ffffff] shadow-sm rounded-2xl">
              <div className="mb-4">
                <Image src={item.icon} alt="Mental Health Icon" width={30} height={30} />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h2>
              {/* <p className="text-sm text-gray-600">{item.description}</p> */}
              <a href="" className="underline text-base">Learn More</a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-end items-center mt-9 me-8 gap-4">
        {/* Play/Pause Button with Progress Circle */}
        
        {/* Navigation Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="relative z-[1] lg:w-[36px] text-3xl text-[#616165] cursor-pointer lg:h-[36px] w-[27px] h-[27px] rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
          >
            <MdKeyboardArrowLeft />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="relative z-[1] lg:w-[36px] text-3xl text-[#616165] cursor-pointer lg:h-[36px] w-[27px] h-[27px] rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
          >
            <MdKeyboardArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExploreStream