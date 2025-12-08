"use client";

import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "@/utils/firebase";


interface BrochureProps {
  category: "mat-kabbadi" | "footprints";
}

interface EventSection {
  heading: string;
  description: string;
  googleFormUrl: string;
  flipbookUrl: string;
}

export default function Brochure({ category }: BrochureProps) {
  const [data, setData] = useState<EventSection | null>(null);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "events", category), (snap) => {
      if (snap.exists()) {
        setData(snap.data() as EventSection);
      }
    });

    return () => unsub();
  }, [category]);

  if (!data) return <div className="text-center py-20">Loading...</div>;

  const handleRegister = () => {
    if (data.googleFormUrl) {
      window.open(data.googleFormUrl, "_blank");
    }
  };

  return (
    <section className="w-full px-5 py-10 md:py-16 bg-[#F5F6FA]">
      <div className="max-w-7xl xl:max-w-[85%] mx-auto flex flex-col items-center">

        <div className="flex justify-between items-center w-full md:mb-10">
          {/* Heading */}
          <div>
            <h1 className="text-[30px] lg:text-[54px] font-bold text-[#1D1D1F]">
              {data.heading}
            </h1>

            <p className="lg:text-2xl text-base text-[#1D1D1F] font-medium">
              {data.description}
            </p>
          </div>

          {/* Register Button (Desktop) */}
          {data.googleFormUrl && (
            <button
              onClick={handleRegister}
              className="text-white bg-[#3C71D7] hidden lg:block rounded-[90px] px-8 py-3 font-bold"
            >
              Register Now
            </button>
          )}
        </div>

        {/* Flipbook iFrame */}
        {data.flipbookUrl && (
          <div className="w-full mt-10 flex justify-center">
            <iframe
              src={data.flipbookUrl}
              className="w-full h-[600px] rounded-md"
              allowFullScreen
            />
          </div>
        )}

        {/* Register Button (Mobile) */}
        {data.googleFormUrl && (
          <button
            onClick={handleRegister}
            className="text-white bg-[#3C71D7] block lg:hidden mt-10 rounded-[90px] px-8 py-3 font-bold"
          >
            Register Now
          </button>
        )}
      </div>
    </section>
  );
}
