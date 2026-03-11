"use client";

import { useEffect, useState } from "react";


// interface MagazineProps {
//   initialUrl: string | null;
// }

export default function Magazine({ initialUrl }: { initialUrl: string | null }) {
  const [magazineUrl, setMagazineUrl] = useState<string | null>(initialUrl);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // If no initial URL, try to fetch client-side or just stay empty?
    // Since we are doing SSR, we expect initialUrl to be populated if data exists.
    // We can keep onSnapshot if we want real-time updates, but for now we prioritize SSR.
    if (initialUrl) {
      setMagazineUrl(initialUrl);
      setLoading(false);
    }
  }, [initialUrl]);

  return (
    <div className="max-w-7xl xl:max-w-[75%] px-5 mx-auto my-10 lg:my-16">
      <h1 className="text-[30px] lg:text-[54px] font-bold text-[#1D1D1F]">E-Magazine</h1>

      {/* Loading State */}
      {loading && null}

      {/* No Magazine Found */}
      {!loading && !magazineUrl && (
        <div className="text-center text-[#2A2A2A] mt-10">
          <p>No magazine uploaded yet.</p>
        </div>
      )}

      {/* Display Magazine */}
      {!loading && magazineUrl && (
        <iframe className="w-full h-[70vh] mt-5 lg:mt-10" allowFullScreen allow="clipboard-write" scrolling="no" src={magazineUrl} frameBorder="0" />
      )}
    </div>
  );
}
