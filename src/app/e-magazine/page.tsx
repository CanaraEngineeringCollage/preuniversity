import Magazine from '@/components/BuzzComponents/Magazine/Magazine'
import React from 'react'
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
    description:
      "Read the official E-Magazine featuring student talents, college highlights, and campus stories from Canara PU College.",
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

const page = () => {
  return (
    <div>
          <Magazine /> 
      
    </div>
  )
}

export default page
