import Banner from '@/components/Common/Banner/Banner'
import FounderSection from '@/components/LegacyPageComponents/OurFounder/OurFounder'
import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Legacy – Canara Pre-University College, Mangalore",
  description:
    "Discover the rich legacy of Canara Pre-University College, Mangalore. A heritage of academic excellence, values, and service since 1972, shaping generations of students in Science and Commerce streams.",
  keywords: [
    "Canara PU College Legacy",
    "History of Canara Institutions",
    "Canara College heritage",
    "PUC history Mangalore",
    "Canara educational legacy",
    "Canara College journey",
    "Founding values Canara PU",
    "Canara Institutions since 1972",
  ],
  authors: [
    {
      name: "Canara Pre-University College, Mangalore",
      url: "https://canarapucollege.com",
    },
  ],
  openGraph: {
    title: "Our Legacy – Canara Pre-University College, Mangalore",
    description:
      "Explore the heritage and historical journey of Canara PU College, Mangalore — empowering students with values and quality education for over five decades.",
    url: "https://canarapucollege.com/legacy",
    siteName: "Canara PU College Mangalore",
    images: [
      {
        url: "/icon.png", // replace with legacy banner if available
        width: 1200,
        height: 630,
        alt: "Canara PU College Legacy",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Legacy – Canara PU College, Mangalore",
    description:
      "A look into the heritage, values, and historical journey of Canara Pre-University College.",
    images: ["/icon.png"],
  },
};

const page = () => {
  return (
   <>
   <section>
    <Banner/>
   </section>
   <section>
    <FounderSection/>
   </section>
   </>
  )
}

export default page
