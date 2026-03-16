"use client";

import { useState, useEffect, useCallback } from "react";

interface CircularItem {
  id: number;
  title: string;
  fileUrl: string;
  createdAt?: string;
}

export default function ExamCircularPageComponent() {
  const [circulars, setCirculars] = useState<CircularItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch circulars from the new Next.js API
 // Inside your Pre-University ExamCircularPageComponent

const fetchCirculars = useCallback(async () => {
  try {
    setLoading(true);
    
    // 1. Define your CMS URL
    const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL || "http://localhost:3000";
    
    // 2. Fetch data from the CMS
    const res = await fetch(`${cmsUrl}/api/exam-circulars?page=1&limit=50`);
    
    if (!res.ok) throw new Error("Failed to fetch circulars");

    const data = await res.json();
    
    // 3. THE FIX: Attach the CMS URL to every file path so it points to port 3000
    const formattedData = data.items.map((item: CircularItem) => ({
      ...item,
      fileUrl: item.fileUrl.startsWith('http') 
        ? item.fileUrl 
        : `${`http://localhost:3000`}${item.fileUrl}` // Turns "/uploads/file.pdf" into "http://localhost:3000/uploads/file.pdf"
    }));

    setCirculars(formattedData ?? []);
  } catch (err) {
    console.error("Error loading circulars:", err);
  } finally {
    setLoading(false);
  }
}, []);

  useEffect(() => {
    fetchCirculars();
  }, []);

  return (
    <>
      <section className="max-w-7xl xl:max-w-[75%] px-5 mx-auto text-[#1D1D1F] py-10 lg:py-16">
        <h1 className="mb-5 lg:mb-10 font-bold text-[30px] lg:text-5xl">
          Exam Circulars
        </h1>

        {loading ? (
          <p className="text-lg lg:text-xl text-[#2A2A2A]">Loading...</p>
        ) : circulars.length === 0 ? (
          <p className="text-lg lg:text-xl text-[#2A2A2A]">
            No circulars available right now.
          </p>
        ) : (
          <div className="mt-4">
            {circulars.map((item) => (
              <p
                key={item.id}
                onClick={() => window.open(item.fileUrl, "_blank")}
                className="text-lg lg:text-xl text-[#2A2A2A] cursor-pointer mb-4 hover:underline"
              >
                {item.title}
              </p>
            ))}
          </div>
        )}
      </section>
    </>
  );
}