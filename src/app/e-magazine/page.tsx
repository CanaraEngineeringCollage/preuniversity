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

import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import { db } from "@/utils/firebase";

const getMagazine = async (): Promise<string | null> => {
  try {
    const q = query(collection(db, "magazines"), orderBy("createdAt", "desc"), limit(1));

    const snap = await getDocs(q);

    if (!snap.empty) {
      return snap.docs[0].data().url;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Failed to load Magazine:", error);
    return null;
  }
};

const page = async () => {
  const magazineUrl = await getMagazine();

  return (
    <div>
      <Magazine initialUrl={magazineUrl} />
    </div>
  );
};

export default page;
