import ConductSection from '@/components/ConductPageComponent/ConductSection/ConductSection'
import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Code of Conduct – Canara Pre-University College, Mangalore",
  description:
    "Read the Code of Conduct at Canara Pre-University College, Mangalore. Learn about discipline, student responsibilities, campus rules, and guidelines that promote a safe and respectful learning environment.",
  keywords: [
    "Canara PU College Code of Conduct",
    "PUC rules and regulations",
    "College conduct guidelines",
    "Student discipline Mangalore",
    "PUC campus rules",
    "Canara Institutions policies",
    "PUC student responsibilities",
    "PU College discipline policies"
  ],
  authors: [
    {
      name: "Canara Pre-University College, Mangalore",
      url: "https://canarapucollege.com",
    },
  ],
  openGraph: {
    title: "Code of Conduct – Canara Pre-University College",
    description:
      "Learn about student responsibilities, campus rules, and discipline guidelines at Canara PU College, Mangalore.",
    url: "https://canarapucollege.com/conduct",
    siteName: "Canara PU College Mangalore",
    images: [
      {
        url: "/icon.png", 
        width: 1200,
        height: 630,
        alt: "Canara PU College Code of Conduct",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Code of Conduct – Canara PU College, Mangalore",
    description:
      "Understand the rules, discipline, and expected conduct at Canara Pre-University College.",
    images: ["/icon.png"],
  },
};

const page = () => {
  return (
    <>
    <section>
        <ConductSection/>
    </section>
      
    </>
  )
}

export default page
