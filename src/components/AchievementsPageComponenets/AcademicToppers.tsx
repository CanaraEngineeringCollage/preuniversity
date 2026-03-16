"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface AcademicTopper {
  id: number;
  name: string;
  year: string;
  imageUrl: string;
  createdAt: string;
}

export default function AcademicToppers() {
  const [achievements, setAchievements] = useState<Record<string, AcademicTopper[]>>({});
  const [years, setYears] = useState<string[]>([]);
  const [openYear, setOpenYear] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [loadingYear, setLoadingYear] = useState<string>(""); // Tracks if a specific accordion is loading

  const yearRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // 1. Fetch only the unique years on initial load
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        // Fetch ONLY the years list using the optimized action we added to the backend
        const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/academic-toppers?action=getYears`);
        if (!res.ok) throw new Error("Failed to fetch years");
        
        const fetchedYears: string[] = await res.json();
        setYears(fetchedYears);
        
        // If there are years, open the first one and fetch its data
        if (fetchedYears.length > 0) {
          const firstYear = fetchedYears[0];
          setOpenYear(firstYear);
          await fetchYearData(firstYear);
        }
      } catch (error) {
        console.error("Initialization error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  // 2. The Lazy Loading function - fetches data only for a specific year
  const fetchYearData = async (targetYear: string) => {
    // If we already downloaded this year's data previously, do nothing!
    if (achievements[targetYear]) return;

    setLoadingYear(targetYear);
    try {
      // Fetch only the specific year (limit 100 per year max to be safe)
      const params = new URLSearchParams({ limit: "100", year: targetYear });
      const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/academic-toppers?${params.toString()}`);
      
      if (!res.ok) throw new Error("Failed to fetch year data");
      
      const data = await res.json();
      
      // Save it into our state dictionary
      setAchievements((prev) => ({
        ...prev,
        [targetYear]: data.items ?? []
      }));
    } catch (error) {
      console.error(`Fetch error for year ${targetYear}:`, error);
    } finally {
      setLoadingYear("");
    }
  };

  const handleToggle = async (year: string) => {
    const isOpening = openYear !== year;
    setOpenYear(isOpening ? year : "");

    if (isOpening) {
      // LAZY LOAD: Fetch data right as they open the accordion (if we don't have it)
      if (!achievements[year]) {
        await fetchYearData(year);
      }

      // Smooth scroll (Fixed the bug by attaching the ref below)
      setTimeout(() => {
        yearRefs.current[year]?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }
  };

  if (loading) {
    return (
      <section className="w-full py-16 flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#1D1D1F]"></div>
      </section>
    );
  }

  return (
    <section className="w-full py-16 text-[#1D1D1F]">
      <h2 className="text-center text-3xl leading-[1.1] md:text-3xl lg:text-4xl lg2:text-5xl font-bold text-[#1D1D1F] mb-12">
        Academic Toppers
      </h2>

      <div className="max-w-7xl xl:max-w-[85%] mx-auto space-y-6 px-5">
        {years.length === 0 ? (
          <p className="text-center text-gray-500 py-10">No academic toppers found.</p>
        ) : (
          years.map((year) => (
            <div
              key={year}
             // FIXED: Attached ref for auto-scroll
              className="border-b-2 border-[#000000] pb-4"
            >
              {/* YEAR HEADER */}
              <div
                className="flex justify-between items-center cursor-pointer py-2"
                onClick={() => handleToggle(year)}
              >
                <div className="flex items-center gap-4">
                  <h3 className="lg:text-4xl text-xl font-medium text-[#1D1D1F]">{year}</h3>
                  {loadingYear === year && (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#1D1D1F]"></div>
                  )}
                </div>
                
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
                    {/* Don't render grid if it's currently loading */}
                    {loadingYear !== year && (
                      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-y-10 py-14">
                        {achievements[year]?.map((item) => {
                          const fullImageUrl = item.imageUrl.startsWith('/') 
                            ? `${process.env.NEXT_PUBLIC_CMS_URL}${item.imageUrl}` 
                            : item.imageUrl;

                          return (
                            <div key={item.id} className="text-center px-2">
                              <div className="w-full relative rounded-lg overflow-hidden mb-3 bg-gray-50">
                                <Image
                                  src={fullImageUrl}
                                  alt={item.name}
                                  height={400} // FIXED: Reduced image size
                                  width={400}  // FIXED: Reduced image size
                                  sizes="(max-width: 640px) 50vw, 33vw" // FIXED: Responsive sizes
                                  className="w-full aspect-square object-contain"
                                />
                              </div>
                              <p className="font-bold text-lg lg:text-xl">{item.name}</p>
                            </div>
                          );
                        })}

                        {(!achievements[year] || achievements[year].length === 0) && (
                          <p className="text-base col-span-full">No achievements available for this year.</p>
                        )}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))
        )}
      </div>
    </section>
  );
}