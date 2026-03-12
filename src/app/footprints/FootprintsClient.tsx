"use client";

import Brochure, {
  EventSection as BrochureData,
} from "@/components/Common/Brochure/Brochure";
import FestLocation, {
  EventSection as FestLocationData,
} from "@/components/Common/FestLocation/FestLocation";
import React, { useEffect, useState } from "react";

async function getEventData(category: string) {
  const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL || "http://localhost:3000";

  try {
    const res = await fetch(`${cmsUrl}/api/events?category=${category}`, {
      cache: "no-store",
    });

    if (!res.ok) return null;

    const data = await res.json();
    return data.items?.[0] || null;
  } catch (err) {
    console.error(`CMS Fetch Error for ${category}:`, err);
    return null;
  }
}

export default function FootprintsClient() {
  const category = "footprints";
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    let isMounted = true;
    getEventData(category).then((res) => {
      if (isMounted) setData(res);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  const brochureData = data as BrochureData | null;
  const festLocationData = data as FestLocationData | null;

  return (
    <div className="">
      <Brochure category={category} initialData={brochureData} />
      <FestLocation category={category} initialData={festLocationData} />
    </div>
  );
}

