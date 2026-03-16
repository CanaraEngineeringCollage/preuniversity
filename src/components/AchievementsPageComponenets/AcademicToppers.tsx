"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const dummyAchievements = {
  "2024-2025": [
    { name: "II Top Rank Achievers", score: "88/90", subject: "Math", image: "/images/academicAchievements/2024-2025/Rank 25.webp" },
    { name: "II Science Toppers", score: "88/90", subject: "Math", image: "/images/academicAchievements/2024-2025/Science 25.webp" },
    { name: "II Commerce Toppers", score: "88/90", subject: "Math", image: "/images/academicAchievements/2024-2025/Commerce 25.webp" },
    { name: "II Commerce Toppers", score: "88/90", subject: "Math", image: "/images/academicAchievements/2024-2025/Commerce 25 1.webp" },
  ],
  "2023-2024": [
    { name: "II Top Rank Achievers", score: "88/90", subject: "Math", image: "/images/academicAchievements/2023-24/Rank-3.webp" },
    { name: "II Top Rank Achievers", score: "88/90", subject: "Math", image: "/images/academicAchievements/2023-24/Rank.webp" },
    { name: "II Science Toppers", score: "88/90", subject: "Math", image: "/images/academicAchievements/2023-24/Science 1.webp" },
    { name: "II Science Toppers", score: "88/90", subject: "Math", image: "/images/academicAchievements/2023-24/Science 2.webp" },
    { name: "II Commerce Toppers", score: "88/90", subject: "Math", image: "/images/academicAchievements/2023-24/Commerce1-alter.webp" },
    { name: "II Commerce Toppers", score: "88/90", subject: "Math", image: "/images/academicAchievements/2023-24/Commerce2-alter.webp" },
  ],
  "2022-2023": [
    { name: "II Top Rank Achievers", score: "88/90", subject: "Math", image: "/images/academicAchievements/2022-23/rankHolders2025.webp" },
    { name: "II Science Toppers", score: "88/90", subject: "Math", image: "/images/academicAchievements/2022-23/science2025.webp" },
    { name: "II Commerce Toppers", score: "88/90", subject: "Math", image: "/images/academicAchievements/2022-23/commerce20.webp" },
    { name: "II Commerce Toppers", score: "88/90", subject: "Math", image: "/images/academicAchievements/2022-23/commerce2025(2).webp" },
  ],
};

export default function AcademicToppers() {
  const [openYear, setOpenYear] = useState("2024-2025");
  const years = Object.keys(dummyAchievements).sort((a, b) => Number(b) - Number(a));

  const yearRefs = useRef({});

  const handleToggle = (year) => {
    const isOpening = openYear !== year;
    setOpenYear(isOpening ? year : "");

    if (isOpening) {
      setTimeout(() => {
        yearRefs.current[year]?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }
  };

  return (
    <section className="w-full py-16 text-[#1D1D1F]">
      <h2 className="text-center text-3xl leading-[1.1] md:text-3xl lg:text-4xl lg2:text-5xl font-bold font-semibold text-[#1D1D1F] mb-12">
        Academic Toppers
      </h2>

      <div className="max-w-7xl xl:max-w-[85%] mx-auto space-y-6 px-5">
        {years.map((year) => (
          <div
            key={year}
           
            className="border-b-2 border-[#000000] pb-4"
          >
            {/* YEAR HEADER */}
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleToggle(year)}
               
            >
              <h3 className="lg:text-4xl text-xl font-medium text-[#1D1D1F]">{year}</h3>
              
              {/* Animated Arrow Icon */}
              <motion.span 
                className="text-2xl flex items-center origin-center"
                animate={{ rotate: openYear === year ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <svg className="h-5 w-5 lg:h-auto lg:w-auto" width="24" height="13" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.5123 14.5122C13.7769 15.2476 12.5826 15.2476 11.8472 14.5122L0.551673 3.21663C-0.183715 2.48124 -0.183715 1.28697 0.551673 0.551587C1.28706 -0.1838 2.48133 -0.1838 3.21672 0.551587L13.1827 10.5176L23.1487 0.557473C23.884 -0.177915 25.0783 -0.177915 25.8137 0.557473C26.5491 1.29286 26.5491 2.48713 25.8137 3.22252L14.5181 14.5181L14.5123 14.5122Z" fill="#1D1D1F"/>
                </svg>
              </motion.span>
            </div>

            {/* CONTENT */}
            <AnimatePresence initial={false}>
              {openYear === year && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  {/* Changed my-14 (margin) to py-14 (padding) to prevent layout jumping */}
                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-y-10 py-14">
                    {dummyAchievements[year].map((item, index) => (
                      <div key={index} className="text-center">
                        <div className="w-full relative rounded-lg overflow-hidden mb-3 bg-gray-50">
                          <Image
                            src={item.image}
                            alt={item.name}
                            height={1000}
                            width={1000}
                            className="w-full aspect-square object-contain"
                          />
                        </div>
                        <p className="font-bold text-lg lg:text-xl">{item.name}</p>
                      </div>
                    ))}

                    {dummyAchievements[year].length === 0 && (
                      <p className="text-base">No achievements available for this year.</p>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}