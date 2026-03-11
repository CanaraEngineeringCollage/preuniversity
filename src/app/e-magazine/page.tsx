export const dynamic = "force-dynamic";
import Magazine from "@/components/BuzzComponents/Magazine/Magazine";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Magazine – Canara Pre-University College, Mangalore",
  description:
    "Explore the digital E-Magazine of Canara Pre-University College, Mangalore. Read student articles, campus highlights, achievements, creative works, and annual publications online.",
  keywords: [
    "Canara PU College E-Magazine",
    "PUC digital magazine",
    "College online magazine",
    "Canara College magazine",
    "Campus magazine Mangalore",
    "Student publications",
    "College newsletter",
    "PUC Buzz magazine",
  ],
  authors: [
    {
      name: "Canara Pre-University College, Mangalore",
      url: "https://canarapucollege.com",
    },
  ],
  openGraph: {
    title: "E-Magazine – Canara Pre-University College, Mangalore",
    description: "Read the official E-Magazine featuring student talents, college highlights, and campus stories from Canara PU College.",
    url: "https://canarapucollege.com/e-magazine",
    siteName: "Canara PU College Mangalore",
    images: [
      {
        url: "/icon.png", // replace with magazine banner if available
        width: 1200,
        height: 630,
        alt: "Canara PU College E-Magazine",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Magazine – Canara PU College",
    description: "Discover the digital magazine featuring student activities, creativity, and campus stories.",
    images: ["/icon.png"],
  },
};


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
        : `${cmsUrl}${latestMagazine.fileUrl}`;
    }
    
    return null;
  } catch (error) {
    console.error("Failed to load Magazine from CMS:", error);
    return null;
  }
};

const Page = async () => {
  const magazineUrl = await getMagazine();

  return (
    <div>
      <Magazine initialUrl={magazineUrl} />
    </div>
  );
};

export default Page;