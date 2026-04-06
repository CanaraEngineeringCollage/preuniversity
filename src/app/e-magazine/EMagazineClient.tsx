"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { IoClose } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import { BlurImage } from "@/ui/apple-card";

interface MagazineItem {
  id: number;
  title: string;
  fileUrl: string;
  coverUrl: string;
  year: string;
  createdAt: string;
}

interface PaginatedResponse {
  items: MagazineItem[];
  total: number;
  totalPages: number;
  page: number;
}

const getMagazines = async (page: number, limit: number): Promise<PaginatedResponse | null> => {
  const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL || "http://localhost:3000";
  
  try {
    const res = await fetch(`${cmsUrl}/api/magazines?page=${page}&limit=${limit}`, {
      cache: 'no-store',
    });

    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error("Failed to load Magazines from CMS:", error);
    return null;
  }
};

const getCorrectUrl = (url?: string) => {
  const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL || "http://localhost:3000";
  if (!url) return "";
  if (url.startsWith('http')) return url;
  
  const cleanBase = cmsUrl.endsWith('/') ? cmsUrl.slice(0, -1) : cmsUrl;
  const cleanPath = url.startsWith('/') ? url : `/${url}`;
  return `${cleanBase}${cleanPath}`;
};

const MagazineCard = ({ title, fileUrl, content }: { title: string; fileUrl: string; content: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!containerRef.current || containerRef.current.contains(event.target as Node)) {
        return;
      }
      setOpen(false);
    };

    if (open) {
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
    }
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 flex justify-center z-50 overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              className="backdrop-blur-lg w-full fixed inset-0 bg-black/40"
            />
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  damping: 25,
                  stiffness: 300,
                  duration: 0.4,
                },
              }}
              exit={{
                opacity: 0,
                y: -20,
                scale: 0.98,
                transition: { duration: 0.3 },
              }}
              ref={containerRef}
              className="max-w-[95%] lg:max-w-7xl xl:max-w-[85%] w-full xl:mx-auto bg-white shadow-2xl mx-4 h-fit z-[60] my-8 rounded-3xl font-sans relative overflow-hidden"
            >
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { delay: 0.3, duration: 0.2 },
                }}
                className="absolute z-50 top-4 right-4 h-10 w-10 bg-black/10 hover:bg-black/20 dark:bg-white rounded-full flex items-center justify-center transition-colors"
                onClick={() => setOpen(false)}
              >
                <IoClose className="h-6 w-6 text-neutral-800 dark:text-neutral-900" />
              </motion.button>
              <div className="w-full h-full p-2 md:p-6">
                {content}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(true)}
        className="rounded-2xl dark:bg-neutral-900 h-full w-full overflow-hidden bg-white flex flex-col items-start justify-start relative z-10 group shadow-md"
      >
        {/* Flipbook Iframe underneath the gradient and text */}
        <div className="absolute inset-0 z-0 pointer-events-none scale-[1.02] bg-white">
          <iframe 
            className="w-full h-full pointer-events-none" 
            src={fileUrl} 
            frameBorder="0" 
            scrolling="no"
          />
        </div>

        <motion.div
          className="absolute top-[60%] h-[40%] inset-x-0 z-[50] pointer-events-none"
          style={{ backgroundImage: `linear-gradient(to top, #3c72d7, transparent)` }}
          initial={{ opacity: 0.85 }}
          whileHover={{ opacity: 0.95 }}
        />
        
        <div className="absolute bottom-4 w-full left-1/2 -translate-x-1/2 z-[100] text-center pointer-events-none">
          <div className="max-w-[90%] mx-auto text-white border border-white/60 bg-black/20 backdrop-blur-sm rounded-3xl text-sm md:text-base py-3 font-bold px-4 mt-2 transition-colors">
            {title}
          </div>
        </div>
      </motion.button>
    </>
  );
};

export default function EMagazineClient() {
  const [magazines, setMagazines] = useState<MagazineItem[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  
  const observerTarget = useRef<HTMLDivElement>(null);

  // Initial fetch
  useEffect(() => {
    let isMounted = true;
    
    const fetchFirstPage = async () => {
      setIsLoading(true);
      const data = await getMagazines(1, 10);
      
      if (isMounted) {
        if (data) {
          setMagazines(data.items || []);
          setTotalPages(data.totalPages || 1);
          setPage(data.page || 1);
        } else {
          setMagazines([]);
          setTotalPages(1);
          setPage(1);
        }
        setIsLoading(false);
      }
    };

    fetchFirstPage();
    return () => { isMounted = false; };
  }, []);

  const loadMore = useCallback(async () => {
    if (page >= totalPages || isLoadingMore || isLoading) return;
    
    setIsLoadingMore(true);
    const nextPage = page + 1;
    const data = await getMagazines(nextPage, 10);
    
    if (data && data.items) {
      setMagazines(prev => {
        // avoid duplicates
        const existingIds = new Set(prev.map(m => m.id));
        const newItems = data.items.filter(m => !existingIds.has(m.id));
        return [...prev, ...newItems];
      });
      setPage(data.page || nextPage);
      setTotalPages(data.totalPages || 1);
    }
    
    setIsLoadingMore(false);
  }, [page, totalPages, isLoadingMore, isLoading]);

  // Intersection observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && page < totalPages) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [loadMore, page, totalPages]);

  return (
    <div className="min-h-[100vh] py-10 lg:py-16 bg-gray-50/50">
      <div className="max-w-7xl xl:max-w-[75%] px-5 mx-auto">
        <h1 className=" md:leading-[1.1] text-3xl md:text-[46px] font-bold  text-[#1D1D1F] mb-10">E-Magazine</h1>

        {/* Loading State for initial fetch */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-10">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-[360px] md:h-[420px] rounded-2xl overflow-hidden shadow-sm bg-gray-200 animate-pulse relative">
                <div className="absolute bottom-4 w-full left-1/2 -translate-x-1/2 flex justify-center">
                  <div className="h-12 w-[80%] bg-gray-300 rounded-3xl"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {magazines.length === 0 ? (
              <div className="text-center text-[#2A2A2A] mt-20">
                <p className="text-lg">No magazines uploaded yet.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {magazines.map((mag) => (
                  <div key={mag.id} className="h-[360px] md:h-[420px] relative rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <MagazineCard
                      fileUrl={getCorrectUrl(mag.fileUrl)}
                      title={mag.title}
                      content={
                        <div className="w-full bg-white h-[80vh] flex flex-col rounded-3xl pt-2">
                          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 px-4 md:px-8">
                            {mag.title} {mag.year ? <span className="font-normal text-gray-500 text-xl ml-2">({mag.year})</span> : ""}
                          </h2>
                          <div className="flex-1 w-full relative rounded-xl overflow-hidden bg-gray-50">
                            <iframe 
                              className="w-full h-full" 
                              allowFullScreen 
                              allow="clipboard-write" 
                              scrolling="auto" 
                              src={getCorrectUrl(mag.fileUrl)} 
                              frameBorder="0" 
                            />
                          </div>
                        </div>
                      }
                    />
                  </div>
                ))}
              </div>
            )}
            
            {/* Loading more indicator & Observer target */}
            <div ref={observerTarget} className="py-10 flex flex-col justify-center">
              {isLoadingMore && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
                  {[1, 2, 3].map((i) => (
                    <div key={`more-${i}`} className="h-[360px] md:h-[420px] rounded-2xl overflow-hidden shadow-sm bg-gray-200 animate-pulse relative">
                      <div className="absolute bottom-4 w-full left-1/2 -translate-x-1/2 flex justify-center">
                        <div className="h-12 w-[80%] bg-gray-300 rounded-3xl"></div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
