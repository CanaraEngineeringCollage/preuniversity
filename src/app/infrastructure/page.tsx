import Banner from '@/components/Common/Banner/Banner'
import Card from '@/components/InfrastructurePageComponents/CardComponent/CardComponent'
import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Infrastructure – Canara Pre-University College, Mangalore",
  description:
    "Explore the modern infrastructure at Canara Pre-University College, Mangalore. Discover well-equipped laboratories, digital classrooms, library facilities, sports amenities, and a student-friendly learning environment.",
  keywords: [
    "Canara PU College Infrastructure",
    "PUC campus facilities Mangalore",
    "Science labs Canara PU College",
    "PUC classrooms Mangalore",
    "College library Mangalore",
    "Campus infrastructure Canara Institutions",
    "PUC sports facilities",
    "Canara College campus",
  ],
  authors: [
    {
      name: "Canara Pre-University College, Mangalore",
      url: "https://canarapucollege.com",
    },
  ],
  openGraph: {
    title: "Infrastructure – Canara Pre-University College, Mangalore",
    description:
      "Learn about the state-of-the-art infrastructure at Canara PU College including classrooms, labs, library, and sports facilities.",
    url: "https://canarapucollege.com/infrastructure",
    siteName: "Canara PU College Mangalore",
    images: [
      {
        url: "/icon.png", // replace with page banner if available
        width: 1200,
        height: 630,
        alt: "Canara PU College Infrastructure",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Infrastructure – Canara PU College, Mangalore",
    description:
      "Explore the campus infrastructure and facilities at Canara Pre-University College.",
    images: ["/icon.png"],
  },
};

const page = () => {
  return (
    <>
      {/* <section>
        <Banner/>
      </section> */}
      <section>
        <Card/>
      </section>
    </>
  )
}

export default page
