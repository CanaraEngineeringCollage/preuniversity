"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface NonAcademicTopper {
  id: number;
  imageUrl: string;
  createdAt: string;
}

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
  const [achievements, setAchievements] = useState<NonAcademicTopper[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        // Fetching up to 1000 items to display them all in the gallery
        const params = new URLSearchParams({ page: "1", limit: "1000" });
        const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/non-academic-toppers?${params.toString()}`);
        
        if (!res.ok) throw new Error("Failed to fetch data");
        
        const data = await res.json();
        setAchievements(data.items ?? []);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAchievements();
  }, []);

  if (loading) {
    return (
      <section className="w-full md:pt-4 pb-16 text-[#1D1D1F] flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#1D1D1F]"></div>
      </section>
    );
  }

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
        {/* GRID LAYOUT: Adjusted to match 3 columns on tablet and 4 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-10">
          {achievements.map((item, index) => {
            // Dynamically create the absolute image URL
            const fullImageUrl = item.imageUrl.startsWith('/') 
              ? `${process.env.NEXT_PUBLIC_CMS_URL}${item.imageUrl}` 
              : item.imageUrl;

            return (
              <motion.div key={item.id} variants={itemVariants} className="text-center">
                <div className="w-full relative rounded-lg overflow-hidden transition-shadow duration-300 ">
                  <Image
                    src={fullImageUrl}
                    alt={`Achievement ${index + 1}`}
                    height={500}
                    width={500}
                    className="w-full object-contain transition-transform duration-500"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {achievements.length === 0 && (
          <p className="text-center text-base mt-10">
            No achievements available.
          </p>
        )}
      </motion.div>
    </section>
  );
}