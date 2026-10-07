"use client";

export interface EventSection {
  venue?: string;
  timing?: string[]; // Assuming timing is an array of strings based on your request
  getInTouch?: string;
  googleMapUrl?: string;
}

const DEFAULT_MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8486534147857!2d74.8398645!3d12.8791904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba350a13025ca43%3A0xc377faaf3db7a9c3!2sCanara%20College!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin";

export function getEmbedMapUrl(url?: string, venue?: string): string {
  if (!url || typeof url !== "string" || !url.trim()) {
    if (venue && venue.trim()) {
      return `https://maps.google.com/maps?q=${encodeURIComponent(venue.trim())}&output=embed`;
    }
    return DEFAULT_MAP_EMBED_URL;
  }

  const trimmed = url.trim();

  // 1. If full iframe tag was pasted (e.g. <iframe src="..." ...></iframe>)
  const iframeSrcMatch = trimmed.match(/src=["']([^"']+)["']/i);
  if (iframeSrcMatch && iframeSrcMatch[1]) {
    return getEmbedMapUrl(iframeSrcMatch[1], venue);
  }

  // 2. If it's already an embed URL
  if (trimmed.includes("/maps/embed") || trimmed.includes("output=embed")) {
    return trimmed;
  }

  // 3. Parse parameters or paths from Google Maps URLs
  try {
    const urlObj = new URL(trimmed.startsWith("http") ? trimmed : `https://${trimmed}`);

    // Check query params ?q= or ?query=
    const q = urlObj.searchParams.get("q") || urlObj.searchParams.get("query");
    if (q) {
      return `https://maps.google.com/maps?q=${encodeURIComponent(q)}&output=embed`;
    }

    // Check /maps/place/<PlaceName>
    const placeMatch = urlObj.pathname.match(/\/maps\/place\/([^/@]+)/);
    if (placeMatch && placeMatch[1]) {
      const placeName = decodeURIComponent(placeMatch[1].replace(/\+/g, " "));
      return `https://maps.google.com/maps?q=${encodeURIComponent(placeName)}&output=embed`;
    }

    // Check /@lat,lng
    const coordsMatch = urlObj.pathname.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/);
    if (coordsMatch && coordsMatch[1] && coordsMatch[2]) {
      return `https://maps.google.com/maps?q=${coordsMatch[1]},${coordsMatch[2]}&output=embed`;
    }
  } catch {
    // Ignore URL parsing errors
  }

  // 4. If it's a short link (e.g. maps.app.goo.gl or goo.gl/maps) or cannot be embedded directly,
  // fall back to the venue query if available, or the default college map embed.
  if (venue && venue.trim()) {
    return `https://maps.google.com/maps?q=${encodeURIComponent(venue.trim())}&output=embed`;
  }

  return DEFAULT_MAP_EMBED_URL;
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
      : "https://maps.google.com/?q=Canara+College+Mangalore";

  return (
    <section className="w-full px-5 pb-16 pt-5 lg:py-16 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 md:gap-10 gap-5 items-center">
        {/* LEFT TEXT SECTION */}
        <div className=" md:col-span-7 space-y-5">
          <h2 className="text-[#1D1D1F] leading-[1.3] md:text-3xl lg:text-4xl lg2:text-[45px] md:mb-10 text-3xl font-bold">
            {title}
           
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
