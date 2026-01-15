"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const dummyAchievements = [
  "/images/academicAchievements/nonAcademic/b1.webp",
  "/images/academicAchievements/nonAcademic/b2.webp",
  "/images/academicAchievements/nonAcademic/b3.webp",
  "/images/academicAchievements/nonAcademic/b4.webp",
  "/images/academicAchievements/nonAcademic/b5.webp",
  "/images/academicAchievements/nonAcademic/b6.webp",
  "/images/academicAchievements/nonAcademic/b7.webp",
  "/images/academicAchievements/nonAcademic/b8.webp",
  "/images/academicAchievements/nonAcademic/b9.webp",
  "/images/academicAchievements/nonAcademic/b10.webp",
  "/images/academicAchievements/nonAcademic/b11.webp",
  "/images/academicAchievements/nonAcademic/b12.webp",
  "/images/academicAchievements/nonAcademic/b13.webp",
  "/images/academicAchievements/nonAcademic/b14.webp",
];

// Animation variants for staggered entry
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function NonAcademicToppers() {
  return (
    <section className="w-full md:pt-4 pb-16 text-[#1D1D1F]">
      <h2 className="text-center text-3xl leading-[1.1] md:text-3xl lg:text-4xl lg2:text-5xl font-bold font-semibold text-[#1D1D1F] mb-12">
        Non Academic Achievements
      </h2>

      <motion.div
        className="max-w-7xl xl:max-w-[85%] mx-auto px-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* GRID LAYOUT: Adjust grid-cols to change items per row */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-10">
          {dummyAchievements.map((imagePath, index) => (
            <motion.div key={index} variants={itemVariants} className="text-center">
              <div className="w-full relative rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <Image
                  src={imagePath}
                  alt={`Achievement ${index + 1}`}
                  height={500}
                  width={500}
                  className="w-full h-auto object-cover  transition-transform duration-500"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {dummyAchievements.length === 0 && (
          <p className="text-center text-base mt-10">
            No achievements available.
          </p>
        )}
      </motion.div>
    </section>
  );
}