"use client";

import React from "react";

export interface EventSection {
  venue?: string;
  timing?: string[]; // Assuming timing is an array of strings based on your request
  getInTouch?: string;
  googleMapUrl?: string;
}

export function getEmbedMapUrl(url?: string, venue?: string): string | null {
  if (!url && !venue) return null;
  if (url && (url.includes("/maps/embed") || url.includes("output=embed"))) {
    return url;
  }
  const query = venue || url || "";
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
}

export default function FestLocation({ category, initialData , title}: { category: "mat-kabbadi" | "footprints"; initialData?: EventSection | null , title?: string}) {
  const data = initialData;

  // Optional: distinct loading state or default fallback
  if (!data) {
    return (
      <section className="w-full px-5 pb-16 pt-5 lg:py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 md:gap-10 gap-5 items-center animate-pulse">
          {/* LEFT TEXT SECTION SKELETON */}
          <div className="md:col-span-7 space-y-5">
            {/* Title Skeleton */}
            <div className="h-10 md:h-12 bg-gray-300 rounded w-3/4 md:mb-10"></div>
            <div className="h-10 md:h-12 bg-gray-300 rounded w-1/2 md:mb-10"></div>

            {/* Desktop Text Block Skeleton */}
            <div className="hidden md:block space-y-5">
              {[1, 2, 3].map((i) => (
                <div key={i}>
                  <div className="h-6 bg-gray-300 rounded w-1/4 mb-2"></div>
                  <div className="h-6 bg-gray-300 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT GOOGLE MAP IFRAME SKELETON */}
          <div className="md:col-span-5 w-full h-[320px] md:h-[400px] bg-gray-300 rounded-3xl"></div>

          {/* MOBILE Text Section Skeleton */}
          <div className="md:col-span-7 md:hidden mt-6 space-y-5">
            {[1, 2, 3].map((i) => (
              <div key={i}>
                <div className="h-6 bg-gray-300 rounded w-1/4 mb-2"></div>
                <div className="h-6 bg-gray-300 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const embedUrl = getEmbedMapUrl(data.googleMapUrl, data.venue);
  const directMapUrl =
    data.googleMapUrl && !data.googleMapUrl.includes("<iframe")
      ? data.googleMapUrl
      : data.venue
      ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(data.venue)}`
      : null;

  return (
    <section className="w-full px-5 pb-16 pt-5 lg:py-16 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 md:gap-10 gap-5 items-center">
        {/* LEFT TEXT SECTION */}
        <div className={`${embedUrl ? "md:col-span-7" : "md:col-span-12"} space-y-5`}>
          <h2 className="text-[#1D1D1F] leading-[1.3] md:text-3xl lg:text-4xl lg2:text-[45px] md:mb-10 text-3xl font-bold">
            {title}
          </h2>

          {/* Desktop Text Block */}
          <div className="text-left hidden md:block text-[#475467] space-y-5">
            {data.venue && (
              <div>
                <span className="font-bold lg:text-lg text-[#2A2A2A]">Venue</span>
                <p className="font-normal lg:text-lg text-[#2A2A2A]">{data.venue}</p>
              </div>
            )}

            {data.timing && (Array.isArray(data.timing) ? data.timing.length > 0 : Boolean(data.timing)) && (
              <div>
                <span className="font-bold lg:text-lg text-[#2A2A2A]">Fest Timings</span>
                <div className="font-normal lg:text-lg text-[#2A2A2A]">
                  {Array.isArray(data.timing)
                    ? data.timing.map((time, index) => <div key={index}>{time}</div>)
                    : <div>{data.timing}</div>}
                </div>
              </div>
            )}

            {data.getInTouch && (
              <div>
                <span className="font-bold lg:text-lg text-[#2A2A2A]">Get in Touch:</span>
                <span className="font-normal lg:text-lg text-[#2A2A2A]"> {data.getInTouch}</span>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT GOOGLE MAP IFRAME (Only if embedUrl exists) */}
        {embedUrl && (
          <div className="md:col-span-5 h-[320px] md:h-[400px] flex flex-col">
            <div className="w-full h-full relative rounded-3xl overflow-hidden">
              <iframe
                src={embedUrl}
                title={data.venue ? `Location map for ${data.venue}` : "Event Location Map"}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full rounded-3xl border-0"
              ></iframe>
            </div>
            {directMapUrl && (
              <div className="mt-2 text-right">
                <a
                  href={directMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#3C71D7] hover:underline font-medium inline-flex items-center gap-1"
                >
                  Open in Google Maps ↗
                </a>
              </div>
            )}
          </div>
        )}

        {/* MOBILE Text Section (Hidden on MD+) */}
        <div className={`${embedUrl ? "md:col-span-7" : "md:col-span-12"} md:hidden mt-6 space-y-5`}>
          <div className="text-left md:hidden text-[#475467] space-y-5">
            {data.venue && (
              <div>
                <span className="font-bold lg:text-lg text-[#2A2A2A]">Venue</span>
                <p className="font-normal lg:text-lg text-[#2A2A2A]">{data.venue}</p>
              </div>
            )}

            {data.timing && (Array.isArray(data.timing) ? data.timing.length > 0 : Boolean(data.timing)) && (
              <div>
                <span className="font-bold lg:text-lg text-[#2A2A2A]">Fest Timings</span>
                <div className="font-normal lg:text-lg text-[#2A2A2A]">
                  {Array.isArray(data.timing)
                    ? data.timing.map((time, index) => <div key={index}>{time}</div>)
                    : <div>{data.timing}</div>}
                </div>
              </div>
            )}

            {data.getInTouch && (
              <div>
                <span className="font-bold lg:text-lg text-[#2A2A2A]">Get in Touch:</span>
                <span className="font-normal lg:text-lg text-[#2A2A2A]"> {data.getInTouch}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

