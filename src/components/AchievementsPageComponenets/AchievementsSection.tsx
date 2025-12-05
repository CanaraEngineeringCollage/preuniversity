"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const dummyAchievements = {
  2025: [
    { name: "John Doe", score: "88/90", subject: "Math", image: "/images/homePageImages/1.png" },
    { name: "John Doe", score: "88/90", subject: "Math", image: "/images/homePageImages/1.png" },
    { name: "John Doe", score: "88/90", subject: "Math", image: "/images/homePageImages/1.png" },
    { name: "John Doe", score: "88/90", subject: "Math", image: "/images/homePageImages/1.png" },
    { name: "John Doe", score: "88/90", subject: "Math", image: "/images/homePageImages/1.png" },
    { name: "John Doe", score: "88/90", subject: "Math", image: "/images/homePageImages/1.png" },
    { name: "John Doe", score: "88/90", subject: "Math", image: "/images/homePageImages/1.png" },
    { name: "John Doe", score: "88/90", subject: "Math", image: "/images/homePageImages/1.png" },
    { name: "John Doe", score: "88/90", subject: "Math", image: "/images/homePageImages/1.png" },
    { name: "John Doe", score: "88/90", subject: "Math", image: "/images/homePageImages/1.png" },
  ],
  2024: [ { name: "John Doe", score: "88/90", subject: "Math", image: "/images/homePageImages/1.png" },
    { name: "John Doe", score: "88/90", subject: "Math", image: "/images/homePageImages/1.png" },
    { name: "John Doe", score: "88/90", subject: "Math", image: "/images/homePageImages/1.png" },
    { name: "John Doe", score: "88/90", subject: "Math", image: "/images/homePageImages/1.png" },
    { name: "John Doe", score: "88/90", subject: "Math", image: "/images/homePageImages/1.png" },
    { name: "John Doe", score: "88/90", subject: "Math", image: "/images/homePageImages/1.png" },
    { name: "John Doe", score: "88/90", subject: "Math", image: "/images/homePageImages/1.png" },
    { name: "John Doe", score: "88/90", subject: "Math", image: "/images/homePageImages/1.png" },
    { name: "John Doe", score: "88/90", subject: "Math", image: "/images/homePageImages/1.png" },
    { name: "John Doe", score: "88/90", subject: "Math", image: "/images/homePageImages/1.png" },],
  2023: [ { name: "John Doe", score: "88/90", subject: "Math", image: "/images/homePageImages/1.png" },
    { name: "John Doe", score: "88/90", subject: "Math", image: "/images/homePageImages/1.png" },
    { name: "John Doe", score: "88/90", subject: "Math", image: "/images/homePageImages/1.png" },
    { name: "John Doe", score: "88/90", subject: "Math", image: "/images/homePageImages/1.png" },
    { name: "John Doe", score: "88/90", subject: "Math", image: "/images/homePageImages/1.png" },
    { name: "John Doe", score: "88/90", subject: "Math", image: "/images/homePageImages/1.png" },
    { name: "John Doe", score: "88/90", subject: "Math", image: "/images/homePageImages/1.png" },
    { name: "John Doe", score: "88/90", subject: "Math", image: "/images/homePageImages/1.png" },
    { name: "John Doe", score: "88/90", subject: "Math", image: "/images/homePageImages/1.png" },
    { name: "John Doe", score: "88/90", subject: "Math", image: "/images/homePageImages/1.png" },],
};

export default function AchievementsSection() {
  const [openYear, setOpenYear] = useState("2025");
  const years = Object.keys(dummyAchievements).sort((a, b) => Number(b) - Number(a));

  return (
    <section className="w-full py-16 text-[#1D1D1F] ">
      <h2 className="text-center text-3xl leading-[1.1] md:text-3xl lg:text-4xl lg2:text-5xl text-3xl font-bold  text-center font-semibold text-[#1D1D1F] mb-12">
        Our Achievements
      </h2>

      <div className="max-w-7xl xl:max-w-[85%] mx-auto space-y-6 px-5">
        {years.map((year) => (
          <div key={year}  onClick={() => setOpenYear(openYear === year ? "" : year)} className="border-b-2 border-[#000000]  pb-4">
            {/* YEAR HEADER */}
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setOpenYear(openYear === year ? "" : year)}
            >
              <h3 className="lg:text-4xl text-xl font-medium text-[#1D1D1F]">{year}</h3>
              <span className="text-2xl"><svg className="h-5 w-5 lg:h-auto lg:w-auto" width="24" height="13" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5123 14.5122C13.7769 15.2476 12.5826 15.2476 11.8472 14.5122L0.551673 3.21663C-0.183715 2.48124 -0.183715 1.28697 0.551673 0.551587C1.28706 -0.1838 2.48133 -0.1838 3.21672 0.551587L13.1827 10.5176L23.1487 0.557473C23.884 -0.177915 25.0783 -0.177915 25.8137 0.557473C26.5491 1.29286 26.5491 2.48713 25.8137 3.22252L14.5181 14.5181L14.5123 14.5122Z" fill="#1D1D1F"/>
</svg>
</span>
            </div>

            {/* CONTENT */}
            <AnimatePresence>
              {openYear === year && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 my-14">

                    {dummyAchievements[year].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="text-center"
                      >
                        <div className="w-full h-40 relative rounded-lg overflow-hidden mb-3">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover object-[center_20%]"
                          />
                        </div>

                        <p className="font-bold text-xl ">{item.name}</p>
                        <p className="text-base">{item.score}</p>
                        <p className="text-base ">{item.subject}</p>
                      </motion.div>
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
