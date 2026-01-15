"use client";

import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "@/utils/firebase";


interface EventSection {
  venue?: string;
  timing?: string[]; // Assuming timing is an array of strings based on your request
  getInTouch?: string;
  googleMapUrl?: string;
}

export default function FestLocation({ category }: { category: "mat-kabbadi" | "footprints" }) {
  const [data, setData] = useState<EventSection | null>(null);

  // Dynamic Fetching based on category prop
  useEffect(() => {
    const unsub = onSnapshot(doc(db, "events", category), (snap) => {
      if (snap.exists()) {
        setData(snap.data() as EventSection);
      }
    });

    return () => unsub();
  }, [category]);

  // Optional: distinct loading state or default fallback
  if (!data) return null; 

  return (
    <section className="w-full px-5 pb-16 pt-5 lg:py-16 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 md:gap-10 gap-5 items-center">

        {/* LEFT TEXT SECTION */}
        <div className=" md:col-span-7 space-y-5">
          <h2 className="text-[#1D1D1F] leading-[1.3] md:text-3xl lg:text-4xl lg2:text-[45px] md:mb-10 text-3xl font-bold">
            Be a Part of a Fest <br /> Like No Other
          </h2>

          {/* Desktop Text Block */}
          <div className="text-left hidden md:block text-[#475467] space-y-5">
            <p>
              <span className="font-bold lg:text-lg text-[#2A2A2A]">Venue</span> <br />
              <span className="font-normal lg:text-lg text-[#2A2A2A]">
                {data.venue}
              </span>
            </p>

            <p>
              <span className="font-bold lg:text-lg text-[#2A2A2A]">Fest Timings</span> <br />
              <span className="font-normal lg:text-lg text-[#2A2A2A]">
                {/* Maps through the timing array to render lines with breaks */}
                {data.timing?.map((time, index) => (
                  <span key={index}>
                    {time}
                    {index !== (data.timing?.length ?? 0) - 1 && <br />}
                  </span>
                ))}
              </span>
            </p>

            <p>
              <span className="font-bold lg:text-lg text-[#2A2A2A]">Get in Touch:</span>
              <span className="font-normal lg:text-lg text-[#2A2A2A]"> {data.getInTouch}</span>
            </p>
          </div>
        </div>

        {/* RIGHT GOOGLE MAP IFRAME */}
        <div 
          className="md:col-span-5 cursor-pointer" 
          onClick={() => {
            if(data.googleMapUrl) window.open(data.googleMapUrl, "_blank");
          }}
        >
          <iframe
            src={data.googleMapUrl}
            allowFullScreen
            loading="lazy"
            className="w-full h-[320px] md:h-[400px] rounded-3xl "
          ></iframe>
        </div>

        {/* MOBILE Text Section (Hidden on MD+) */}
        <div className=" md:col-span-7 md:hidden mt-6 space-y-5">
          <div className="text-left md:hidden text-[#475467] space-y-5">
            <p>
              <span className="font-bold lg:text-lg text-[#2A2A2A]">Venue</span> <br />
              <span className="font-normal lg:text-lg text-[#2A2A2A]">
                {data.venue}
              </span>
            </p>

            <p>
              <span className="font-bold lg:text-lg text-[#2A2A2A]">Fest Timings</span> <br />
              <span className="font-normal lg:text-lg text-[#2A2A2A]">
                {data.timing?.map((time, index) => (
                  <span key={index}>
                    {time}
                    {index !== (data.timing?.length ?? 0) - 1 && <br />}
                  </span>
                ))}
              </span>
            </p>

            <p>
              <span className="font-bold lg:text-lg text-[#2A2A2A]">Get in Touch:</span>
              <span className="font-normal lg:text-lg text-[#2A2A2A]"> {data.getInTouch}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}