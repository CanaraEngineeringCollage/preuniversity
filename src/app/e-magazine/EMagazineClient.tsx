"use client";

import Magazine from "@/components/BuzzComponents/Magazine/Magazine";
import React, { useEffect, useState } from "react";

const getMagazine = async (): Promise<string | null> => {
  const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL || "http://localhost:3000";
  
  try {
    // Fetch the latest magazine (limit 1)
    const res = await fetch(`${cmsUrl}/api/magazines?limit=1`, {
      cache: 'no-store',
    });

    if (!res.ok) return null;

    const data = await res.json();
    
    if (data.items && data.items.length > 0) {
      const latestMagazine = data.items[0];
      
      // If the URL is relative (starts with /uploads), prefix it with CMS URL
      return latestMagazine.fileUrl.startsWith('http') 
        ? latestMagazine.fileUrl 
        : `${cmsUrl}${latestMagazine.fileUrl.startsWith('/') ? '' : '/'}${latestMagazine.fileUrl}`;
    }
    
    return null;
  } catch (error) {
    console.error("Failed to load Magazine from CMS:", error);
    return null;
  }
};

export default function EMagazineClient() {
  const [magazineUrl, setMagazineUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    getMagazine().then((url) => {
      if (isMounted) {
        setMagazineUrl(url);
        setIsLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-[100vh] flex justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#3C71D7]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-[100vh]">
      {magazineUrl ? <Magazine initialUrl={magazineUrl} /> : null}
    </div>
  );
}
