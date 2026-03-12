"use client";



export interface EventSection {
  venue?: string;
  timing?: string[]; // Assuming timing is an array of strings based on your request
  getInTouch?: string;
  googleMapUrl?: string;
}

export default function FestLocation({ category, initialData }: { category: "mat-kabbadi" | "footprints"; initialData?: EventSection | null }) {
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
              <span className="font-normal lg:text-lg text-[#2A2A2A]">{data.venue}</span>
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
       {/* RIGHT GOOGLE MAP IFRAME */}
<div className="md:col-span-5 h-[320px] md:h-[400px]">
  <iframe
    src={data.googleMapUrl}
    allowFullScreen
    loading="lazy"
    className="w-full h-full rounded-3xl border-0"
    // Ensure no pointer-events: none style is present here!
  ></iframe>
</div>

        {/* MOBILE Text Section (Hidden on MD+) */}
        <div className=" md:col-span-7 md:hidden mt-6 space-y-5">
          <div className="text-left md:hidden text-[#475467] space-y-5">
            <p>
              <span className="font-bold lg:text-lg text-[#2A2A2A]">Venue</span> <br />
              <span className="font-normal lg:text-lg text-[#2A2A2A]">{data.venue}</span>
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
