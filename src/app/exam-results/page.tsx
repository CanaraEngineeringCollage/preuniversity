import Results from '@/components/Common/Results/Results'
import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exam Results – Canara Pre-University College, Mangalore",
  description:
    "View the latest exam results from Canara Pre-University College, Mangalore. Access PUC I & II year results, academic performance reports, and official result announcements.",
  keywords: [
    "Canara PU College Exam Results",
    "PUC results Mangalore",
    "Canara College results",
    "PUC I year results",
    "PUC II year results",
    "PUC academic results",
    "Pre-University exam results",
    "Canara PU results",
  ],
  authors: [
    {
      name: "Canara Pre-University College, Mangalore",
      url: "https://canarapucollege.com",
    },
  ],
  openGraph: {
    title: "Exam Results – Canara Pre-University College, Mangalore",
    description:
      "Check the official exam results and academic performance updates from Canara PU College.",
    url: "https://canarapucollege.com/exam-results",
    siteName: "Canara PU College Mangalore",
    images: [
      {
        url: "/icon.png", // replace with results banner if available
        width: 1200,
        height: 630,
        alt: "Canara PU College Exam Results",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Exam Results – Canara PU College, Mangalore",
    description:
      "Access official exam results of PUC I & II year from Canara Pre-University College.",
    images: ["/icon.png"],
  },
};

const page = () => {
  return (
    <section>
        <Results title="Exam Results" image='/images/commonImages/bannerImage.webp' text='Get Results' />
    </section>
  )
}

export default page
