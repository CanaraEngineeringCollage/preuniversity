"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect, createContext, useCallback } from "react";
import { MdClose, MdKeyboardArrowRight } from "react-icons/md";

import { AnimatePresence, motion } from "framer-motion";

import CustomSelect from "../CustomSelect/CustomSelect";
import { parse } from "node-html-parser";
import { useOutsideClick } from "@/components/hooks/use-outside-click";

interface CampusEvent {
  id: string;
  category: string;
  date: string;
  content: string;
  eventName?: string;
}

interface ExploreCampusProps {
  campusEvents?: CampusEvent[];
  title?: string;
  description?: string;
}

type EventDescriptionProps = {
  src: string;
  date: string;
  topTitle: string;
  topDescription: string;
  remainingHTML: string;
};

interface CarouselContextType {
  onCardClose: (index: number) => void;
  currentIndex: number;
  totalItems: number;
  goToNextCard: () => void;
  openCard: (index: number) => void;
  closeCard: () => void;
  isOpen: boolean;
}

export const CarouselContext = createContext<CarouselContextType>({
  onCardClose: () => {},
  currentIndex: 0,
  totalItems: 0,
  goToNextCard: () => {},
  openCard: () => {},
  closeCard: () => {},
  isOpen: false,
});

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 100, transition: { duration: 0.3 } },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, type: "spring", damping: 20, stiffness: 100 },
  },
  exit: { opacity: 0, scale: 0.9, y: 50, transition: { duration: 0.25 } },
};

const backdropVariants = {
  hidden: { opacity: 0, backdropFilter: "blur(0px)" },
  visible: {
    opacity: 1,
    backdropFilter: "blur(8px)",
    transition: { duration: 0.3 },
  },
  exit: { opacity: 0, backdropFilter: "blur(0px)", transition: { duration: 0.2 } },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.1 } },
};

// Parse HTML & Add CMS URL to images
const parseEventContent = (html: string) => {
  const root = parse(html);
  const firstHeadingEl = root.querySelector("h1,h2,h3,h4,h5,h6");
  const topTitle = firstHeadingEl?.text?.trim() || "";
  if (firstHeadingEl) firstHeadingEl.remove();
  const firstParagraphEl = root.querySelector("p");
  const topDescription = firstParagraphEl?.text?.trim() || "";
  if (firstParagraphEl) firstParagraphEl.remove();
  
  const firstImageEl = root.querySelector("img");
  let src = firstImageEl?.getAttribute("src") || "";
  
  const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL || "http://localhost:3000";
  if (src && src.startsWith('/')) {
    src = `${cmsUrl}${src}`;
  }
  
  if (firstImageEl) firstImageEl.remove();

  let remainingHTML = root
    .toString()
    .replace(/\n|\r/g, "")
    .replace(/>\s+</g, "><")
    .replace(/<[^/>]+>\s*<\/[^>]+>/g, "")
    .trim();

  remainingHTML = remainingHTML.replace(/src="\/uploads\//g, `src="${cmsUrl}/uploads/`);

  return { src, topTitle, topDescription, remainingHTML };
};

// --- SKELETON LOADER COMPONENT ---
const SkeletonCard = () => (
  <div className="flex flex-col md:flex-row items-center gap-6 bg-white rounded-2xl shadow-md animate-pulse">
    {/* Image Skeleton */}
    <div className="flex-shrink-0 w-full md:w-[40%] h-[40vh] md:h-[30vh] lg2:h-[50vh] bg-gray-200 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none" />
    
    {/* Content Skeleton */}
    <div className="flex flex-col justify-center w-full md:w-1/2 p-6 lg:p-10">
      <div className="h-4 bg-gray-200 rounded w-24 mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-32 mb-3"></div>
      <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
      <div className="space-y-2 mb-6">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      </div>
      <div className="h-5 bg-gray-200 rounded w-28"></div>
    </div>
  </div>
);
// ---------------------------------

function EventContent({ description }: { description: EventDescriptionProps }) {
  return (
    <div>
      {description.src && (
        <Image
          src={description.src}
          alt={description.topTitle}
          loading="lazy"
          width={1000}
          height={700}
          className="object-cover overflow-hidden rounded-t-2xl w-full h-full mb-10"
        />
      )}
      <div className="p-4 lg:px-20 space-y-10 text-left text-sm text-black bg-white">
        <div>
          {description.date && (
            <p className="text-[17px] text-textGray uppercase font-bold ">
              {new Date(description.date).toLocaleDateString("en-GB")}
            </p>
          )}
          {description.topTitle && (
            <h3 className="text-[27px] font-semibold font-sans text-black my-3 line-clamp-2">
              {description.topTitle}
            </h3>
          )}
          {description.topDescription && (
            <p className="text-xl text-textGray">{description.topDescription}</p>
          )}
        </div>
        {description.remainingHTML && (
          <div
            className={`bg-white   ${
              description.topDescription &&
              description.topTitle &&
              description.src &&
              "-mt-20"
            } ${description.topDescription && "-mt-10"} ${
              description.topTitle && "-mt-10"
            }`}
            dangerouslySetInnerHTML={{ __html: description.remainingHTML }}
          />
        )}
      </div>
    </div>
  );
}

const ExploreCampus: React.FC<ExploreCampusProps> = ({ title, description }) => {
  const [campusEvents, setCampusEvents] = useState<CampusEvent[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Pagination States
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true); // Default to true so skeletons show immediately
  const [hasMore, setHasMore] = useState(true);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const observerTarget = useRef<HTMLDivElement>(null);
  const loadingRef = useRef(false); 

  // ⭐ 1. Initial Fetch to get Categories
  useEffect(() => {
    const initCategories = async () => {
      try {
        const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL || "http://localhost:3000";
        const res = await fetch(`${cmsUrl}/api/buzz?limit=100`, { cache: 'no-store' });
        if (!res.ok) return;
        const data = await res.json();
        
        const uniqueCats = Array.from(new Set(data.items.map((i: any) => i.category).filter(Boolean))) as string[];
        setCategories(uniqueCats);
        
        if (uniqueCats.length > 0) {
          setActiveCategory(uniqueCats[0]); // Auto-select the first category
        } else {
          setLoading(false); // Stop loading if absolutely nothing exists
        }
      } catch (err) {
        console.error("Error fetching categories:", err);
        setLoading(false);
      }
    };
    initCategories();
  }, []);

  // ⭐ 2. Standard Infinite Scroll Fetch
  const loadEvents = useCallback(async () => {
    if (!activeCategory || loadingRef.current || !hasMore) return;
    
    loadingRef.current = true;
    setLoading(true);

    try {
      const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL || "http://localhost:3000";
      const url = `${cmsUrl}/api/buzz?page=${page}&limit=5&category=${encodeURIComponent(activeCategory)}`;

      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();

      const newItems: CampusEvent[] = data.items.map((item: any) => ({
        id: item.id.toString(),
        category: item.category,
        date: item.date,
        content: item.content,
        eventName: item.name,
      }));

      setCampusEvents((prev) => (page === 1 ? newItems : [...prev, ...newItems]));
      setHasMore(data.page < data.totalPages);

    } catch (err) {
      console.error("Error fetching buzz:", err);
    } finally {
      loadingRef.current = false;
      setLoading(false);
    }
  }, [page, activeCategory, hasMore]);

  // Trigger fetch when category or page changes
  useEffect(() => {
    loadEvents();
  }, [loadEvents]);

  // Handle Category Change
  const handleCategoryChange = (newCategory: string) => {
    if (newCategory === activeCategory) return;
    setActiveCategory(newCategory);
    setPage(1);
    setCampusEvents([]); // Clear list immediately so skeletons appear
    setHasMore(true);
  };

  // Standard Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loadingRef.current) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { rootMargin: "100px", threshold: 0.1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) observer.unobserve(observerTarget.current);
    };
  }, [hasMore]);

  const openCard = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeCard = () => setIsOpen(false);

  const goToNextCard = () =>
    setCurrentIndex((prev) =>
      campusEvents.length ? (prev + 1) % campusEvents.length : 0
    );

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    const handleKeyDown = (event: KeyboardEvent) =>
      event.key === "Escape" && isOpen && closeCard();
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useOutsideClick(containerRef, () => isOpen && closeCard());

  const getEventDescription = (event: CampusEvent): EventDescriptionProps => ({
    ...parseEventContent(event.content),
    date: event.date,
  });

  return (
    <CarouselContext.Provider
      value={{
        onCardClose: () => {},
        currentIndex,
        totalItems: campusEvents.length,
        goToNextCard,
        openCard,
        closeCard,
        isOpen,
      }}
    >
      <section className="max-w-7xl xl:max-w-[75%] px-4 mx-auto text-[#1D1D1F] py-16">
        {(title || description) && (
          <div className="text-center mb-10 lg:px-32">
            <h1 className="text-center md:leading-[1.1] text-3xl md:text-[46px] mb-5 font-bold">
              {title}
            </h1>
            <p className="text-center text-[21px]">{description}</p>
          </div>
        )}

        {/* Category Filters */}
        {categories.length > 0 && (
          <div className="pb-5 lg:pb-10">
            {/* Mobile Dropdown */}
            <div className="flex lg:hidden justify-between items-center gap-2 md:hidden">
              <CustomSelect
                value={activeCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                options={categories.map((c) => formatCategory(c))}
              />
            </div>

            {/* Desktop View */}
            <div className="hidden lg:flex justify-evenly items-center pb-5 lg:pb-10 flex-wrap gap-2">
              {categories.map((category, index) => (
                <h3
                  onClick={() => handleCategoryChange(category)}
                  className={`cursor-pointer transition-colors duration-200 ${
                    category === activeCategory ? "text-black font-bold" : "text-textGray hover:text-black"
                  } text-lg`}
                  key={index}
                >
                  {formatCategory(category)}
                </h3>
              ))}
            </div>
          </div>
        )}

        {/* Event Cards & Skeletons */}
        <div className="flex flex-col gap-8">
          {/* Loaded Cards */}
          {campusEvents.map((event, index) => {
            const { src, topTitle, topDescription } = parseEventContent(event.content);
            return (
              <div
                key={`${event.id}-${index}`}
                onClick={() => openCard(index)}
                className="flex cursor-pointer flex-col md:flex-row items-center gap-6 bg-white rounded-2xl shadow-md transition-shadow hover:shadow-lg"
              >
                <div className="flex-shrink-0 w-full md:w-[40%]">
                  <Image
                    src={src || "/placeholder-image.jpg"}
                    alt={topTitle || event.category}
                    width={1000}
                    height={1000}
                    className="rounded-l-2xl object-cover w-full h-[40vh] md:h-[30vh] lg2:h-[50vh]"
                  />
                </div>
                <div className="flex flex-col justify-center w-full md:w-1/2 p-6 lg:p-10">
                  {event.date && (
                    <p className="text-[17px] text-textGray uppercase font-bold mb-4">
                      {new Date(event.date).toLocaleDateString("en-GB")}
                    </p>
                  )}
                  {event.eventName && (
                    <p className="text-textGray text-[17px] mb-3">
                      {event.eventName}
                    </p>
                  )}
                  {topTitle && (
                    <h2 className="text-2xl lg:text-[31px] leading-[1.1] font-bold text-[#1D1D1F] mb-2">
                      {topTitle}
                    </h2>
                  )}
                  {topDescription && (
                    <p className="text-textGray leading-[1.3] line-clamp-3 text-[21px] mb-4">
                      {topDescription}
                    </p>
                  )}
                  <motion.button
                    onClick={() => openCard(index)}
                    className="text-[#3C71D7] inline-flex text-[21px] items-center font-medium text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Read More <span> <MdKeyboardArrowRight className="ml-1 mt-1 text-[20px] md:text-[25px]" /> </span>
                  </motion.button>
                </div>
              </div>
            );
          })}

          {/* Skeleton Loaders (Appears while fetching data) */}
          {loading && (
            <>
              <SkeletonCard />
              {/* If it's the very first page load, show an extra skeleton to fill the screen better */}
              {page === 1 && <SkeletonCard />}
            </>
          )}

          {/* Empty State */}
          {!loading && campusEvents.length === 0 && (
            <p className="text-center text-textGray text-[18px] py-10">
              There are no events in this category yet.
            </p>
          )}
        </div>

        {/* Hidden Infinite Scroll Trigger Point */}
        <div ref={observerTarget} className="w-full h-10 mt-4 pointer-events-none" />

        {/* Modal */}
        <AnimatePresence>
          {isOpen && campusEvents.length > 0 && (
            <motion.div
              className="fixed inset-0 h-screen z-50 overflow-auto"
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div
                variants={backdropVariants}
                className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
                onClick={closeCard}
              />
              <motion.div
                variants={cardVariants}
                ref={containerRef}
                className="max-w-4xl mx-auto bg-white h-fit z-[60] my-10 pb-10 rounded-3xl font-sans relative shadow-2xl"
              >
                <motion.button
                  variants={contentVariants}
                  className="absolute top-6 me-4 lg:me-8 h-8 w-8 right-0 cursor-pointer ml-auto bg-[#808080] rounded-full flex items-center justify-center"
                  onClick={closeCard}
                >
                  <MdClose className="text-white" />
                </motion.button>

                <motion.div variants={contentVariants} className="!overflow-hidden">
                  <EventContent
                    description={getEventDescription(campusEvents[currentIndex])}
                  />
                </motion.div>

                <motion.div variants={contentVariants} className="p-4 lg:px-20 ">
                  <h1 className="border-t-2 pt-9 text-[10px] md:text-[12px] text-textGray border-t-gray-200">
                    {parseEventContent(
                      campusEvents[(currentIndex + 1) % campusEvents.length].content
                    ).topTitle && "Next Event"}
                  </h1>
                  <h1
                    onClick={goToNextCard}
                    className="text-[#2997FF] inline-flex items-center cursor-pointer font-bold text-[16px] md:text-[20px]"
                  >
                    {parseEventContent(
                      campusEvents[(currentIndex + 1) % campusEvents.length].content
                    ).topTitle || "Next Event"}
                    <MdKeyboardArrowRight className="ml-1 mt-1 text-[20px] md:text-[25px]" />
                  </h1>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </CarouselContext.Provider>
  );
};

export default ExploreCampus;

const formatCategory = (cat: string) => {
  if (!cat) return "";
  return cat.charAt(0).toUpperCase() + cat.slice(1).toLowerCase();
};