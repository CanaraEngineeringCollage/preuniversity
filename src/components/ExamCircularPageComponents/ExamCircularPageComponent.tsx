"use client";

import { useState, useEffect } from "react";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "@/utils/firebase";

interface CircularItem {
  id: string;
  title: string;
  pdfUrl: string;
  fileName: string;
}

export default function ExamCircularPageComponent() {
  const [circulars, setCirculars] = useState<CircularItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch circulars from Firestore
  async function fetchCirculars() {
    try {
      const q = query(
        collection(db, "exam-circulars"),
        orderBy("createdAt", "desc")
      );

      const snap = await getDocs(q);

      const list = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as CircularItem[];

      setCirculars(list);
    } catch (error) {
      console.error("Error loading circulars:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCirculars();
  }, []);

  return (
    <>
      <section className="max-w-6xl xl:max-w-[75%] mx-auto px-5 text-[#1D1D1F] py-10 lg:py-16">
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
                onClick={() => window.open(item.pdfUrl, "_blank")}
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
