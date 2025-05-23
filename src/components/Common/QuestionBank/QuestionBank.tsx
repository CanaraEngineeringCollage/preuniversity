"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect, createContext } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowRight as MdKeyboardArrowRightIcon } from "react-icons/md";
// import { IoMdClose } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/components/hooks/use-outside-click";
import { IoMdClose } from "react-icons/io";

// Define the shape of an event with extended fields for modal
interface CampusEvent {
  id: number;
  category: string;
  date: string;
  title: string;
  description: string;
  image: string;
  // Extended fields for modal (adjust based on actual data)
  topTitle?: string;
  topDescription?: string;
  middleTitle?: string;
  middleSubTitle?: string;
  middleDescription?: string;
  middleTitle2?: string;
  middleDescription2?: string;
}

// Define the props for the component
interface ExploreCampusProps {
  campusEvents: CampusEvent[];
  title?: string;
  description?: string;
}

// Modal content props (similar to DescriptionProps in ExploreFacilities)
type EventDescriptionProps = {
  src: string;
  date: string;
  topTitle: string;
  topDescription: string;
  middleTitle: string;
  middleSubTitle: string;
  middleDescription: string;
  middleTitle2: string;
  middleDescription2: string;
};

// Carousel Context for modal control
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

// Animation variants (same as ExploreFacilities)
const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 100, transition: { duration: 0.3, ease: "easeIn" } },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut", type: "spring", damping: 20, stiffness: 100 } },
  exit: { opacity: 0, scale: 0.9, y: 50, transition: { duration: 0.25, ease: "easeIn" } },
};

const backdropVariants = {
  hidden: { opacity: 0, backdropFilter: "blur(0px)" },
  visible: { opacity: 1, backdropFilter: "blur(8px)", transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, backdropFilter: "blur(0px)", transition: { duration: 0.2, ease: "easeIn" } },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.1, ease: "easeOut" } },
};

// Modal content component (adapted from CardContent in ExploreFacilities)
function EventContent({ description }: { description: EventDescriptionProps }) {
  return (
    <div>
      <Image
        src={description.src}
        alt="Event Image"
        loading="lazy"
        width={1000}
        height={700}
        className="object-cover overflow-hidden rounded-t-2xl w-full lg:h-[700px] h-[400px] mb-10"
      />
      <div className="p-4 lg:px-20 space-y-10 text-left text-sm text-black bg-white">
        <div>
          <p className="text-[17px] text-textGray uppercase font-bold mb-4">{description.date}</p>
          <h3 className="text-[31px] lg:text-[46px] leading-[1.1] lg:max-w-[70%] mb-5 font-bold">{description.topTitle}</h3>
          <p className="text-xl text-textGray">{description.topDescription}</p>
        </div>
        <div>
          <h4 className="text-2xl font-bold mb-2">{description.middleTitle}</h4>
          <p className="text-lg text-textGray">{description.middleSubTitle}</p>
          <p className="text-textGray">{description.middleDescription}</p>
        </div>
        <div>
          <h4 className="text-2xl font-bold mb-2">{description.middleTitle2}</h4>
          <p className="text-textGray">{description.middleDescription2}</p>
        </div>
      </div>
    </div>
  );
}

const ExploreCampus: React.FC<ExploreCampusProps> = ({ title, description, campusEvents }) => {
  const categories: string[] = ["All", "Sports", "Fest", "Academics", "Cultural Events", "Technical Events", "Exams", "CSR", "Alumni"];
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Filter events based on active category
  const filteredEvents = activeCategory === "All" ? campusEvents : campusEvents.filter((event) => event.category === activeCategory);

  // Modal control functions
  const handleCardClose = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(false);
  };

  const openCard = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeCard = () => {
    setIsOpen(false);
  };

  const goToNextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredEvents.length);
    setIsOpen(true);
  };

  // Handle body overflow and Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        closeCard();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Handle outside click to close modal
  useOutsideClick(containerRef, () => {
    if (isOpen) closeCard();
  });

  // Map CampusEvent to EventDescriptionProps for modal
  const getEventDescription = (event: CampusEvent): EventDescriptionProps => ({
    src: event.image,
    date: event.date,
    topTitle: event.title,
    topDescription: event.description || "Explore the details of this campus event.",
    middleTitle: "Event Overview",
    middleSubTitle: event.category,
    middleDescription: "Detailed description of the event's purpose and activities.", // Placeholder
    middleTitle2: "Highlights",
    middleDescription2: "Key highlights and what to expect from this event.", // Placeholder
  });

  return (
    <CarouselContext.Provider
      value={{
        onCardClose: handleCardClose,
        currentIndex,
        totalItems: filteredEvents.length,
        goToNextCard,
        openCard,
        closeCard,
        isOpen,
      }}
    >
      <section className="max-w-7xl xl:max-w-[75%] mx-auto text-black py-10">
        {(title || description) && (
          <div className="text-center mb-10 lg:px-32">
            <h1 className="text-center leading-[1.1] text-[46px] mb-5 font-bold">{title}</h1>
            <p className="text-center">{description}</p>
          </div>
        )}
        <div className="flex justify-between items-center pb-5 lg:pb-10 flex-wrap gap-2">
          <button className="border text-lg font-bold px-3 py-1 rounded-4xl cursor-pointer" onClick={() => setActiveCategory("All")}>
            Clear All Filters
          </button>
          {categories.map((category, index) => (
            <h3
              onClick={() => setActiveCategory(category)}
              className={`cursor-pointer ${category === activeCategory ? "text-black font-bold" : "text-textGray"} text-[18px]`}
              key={index}
            >
              {category}
            </h3>
          ))}
        </div>

        <div className="flex flex-col gap-8">
          {filteredEvents.map((event, index) => (
            <div onClick={() => openCard(index)} key={event.id} className="flex cursor-pointer flex-col md:flex-row items-center gap-6 bg-white rounded-2xl shadow-md">
              <div className="flex-shrink-0 w-full md:w-[40%]">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={1000}
                  height={1000}
                  className="rounded-l-2xl object-cover w-full h-[40vh] lg:h-[50vh]"
                />
              </div>
              <div className="flex flex-col justify-center w-full md:w-1/2 p-6 lg:p-10">
                <p className="text-[17px] text-textGray uppercase font-bold mb-4">{event.date}</p>
                <h2 className="text-[31px] leading-[1.1] font-bold text-[#1D1D1F] mb-2">{event.title}</h2>
                <p className="text-textGray leading-[1.3] text-[21px] mb-4">{event.description}</p>
                <motion.button
                  onClick={() => openCard(index)}
                  className="text-[#2997FF] inline-flex text-[21px] items-center font-medium text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read More <MdKeyboardArrowRight className="ml-1" />
                </motion.button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <button className="bg-[#eff1f6] text-black px-5 py-2 cursor-pointer rounded-3xl">Explore More Campus Stories</button>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {isOpen && (
            <motion.div className="fixed inset-0 h-screen z-50 overflow-auto" initial="hidden" animate="visible" exit="exit">
              <motion.div variants={backdropVariants} className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0" onClick={closeCard} />
              <motion.div
                variants={cardVariants}
                ref={containerRef}
                className="max-w-6xl mx-auto bg-white h-fit z-[60] my-10 pb-10 rounded-3xl font-sans relative shadow-2xl"
              >
                <motion.button
                  variants={contentVariants}
                  className="absolute top-6 me-4 lg:me-8 h-8 w-8 right-0 cursor-pointer ml-auto bg-[#808080] rounded-full flex items-center justify-center"
                  onClick={closeCard}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IoMdClose className="h-6 w-6 text-white" />
                </motion.button>
                <motion.div variants={contentVariants}>
                  <EventContent description={getEventDescription(filteredEvents[currentIndex])} />
                </motion.div>
                <motion.div variants={contentVariants} className="p-4 lg:px-20 mt-10">
                  <h1 className="border-t-2 pt-9 text-[10px] md:text-[12px] text-textGray border-t-gray-200">Next Event</h1>
                  <h1
                    onClick={goToNextCard}
                    className="text-[#2997FF] inline-flex items-center cursor-pointer font-bold text-[16px] md:text-[20px]"
                  >
                    {filteredEvents[(currentIndex + 1) % filteredEvents.length]?.title || "First Event"}
                    <MdKeyboardArrowRightIcon className="ml-1 mt-1 text-[20px] md:text-[25px]" />
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