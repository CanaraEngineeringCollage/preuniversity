import AdmissionSection from '@/components/AdmissionPageComponents/AdmissionSection'
import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admissions – Canara Pre-University College, Mangalore",
  description:
    "Explore the admissions process at Canara Pre-University College, Mangalore. Learn about eligibility, required documents, Science & Commerce stream options, and how to apply for the academic year.",
  keywords: [
    "Canara PU College Admissions",
    "PUC Admissions Mangalore",
    "Best PU College Admissions",
    "PUC Science Commerce Admission",
    "Canara Pre-University College Application",
    "PCMB PCMC PCME PCMS Admissions",
    "Commerce SEBA HEBA BSBA Admissions",
    "PUC seat availability Mangalore",
  ],
  authors: [
    {
      name: "Canara Pre-University College, Mangalore",
      url: "https://canarapucollege.com",
    },
  ],
  openGraph: {
    title: "Admissions – Canara Pre-University College, Mangalore",
    description:
      "Begin your academic journey with Canara Pre-University College. Get detailed information on admission requirements, Science & Commerce streams, and the application process.",
    url: "https://canarapucollege.com/admissions",
    siteName: "Canara PU College Mangalore",
    images: [
      {
        url: "/icon.png", // replace with a real banner if available
        width: 1200,
        height: 630,
        alt: "Canara PU College Admissions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Admissions – Canara Pre-University College, Mangalore",
    description:
      "Find admission details for Science and Commerce streams at Canara PU College, Mangalore.",
    images: ["/icon.png"],
  },
};

const page = () => {
  return (
   <section>
    <AdmissionSection/>
   </section>
  )
}

export default page
