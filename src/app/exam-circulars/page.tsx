
import Banner from '@/components/Common/Banner/Banner'
import ExamCircularPageComponent from '@/components/ExamCircularPageComponents/ExamCircularPageComponent'
import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exam Circulars – Canara Pre-University College, Mangalore",
  description:
    "Access the latest exam circulars, notifications, timetables, and academic updates from Canara Pre-University College, Mangalore. Stay informed about important exam-related announcements.",
  keywords: [
    "Canara PU College Exam Circulars",
    "PUC exam notifications",
    "PU College exam timetable",
    "Exam updates Mangalore",
    "Canara College circulars",
    "PUC announcements",
    "Pre-University exam schedule",
    "Exam notices Canara PU",
  ],
  authors: [
    {
      name: "Canara Pre-University College, Mangalore",
      url: "https://canarapucollege.com",
    },
  ],
  openGraph: {
    title: "Exam Circulars – Canara Pre-University College, Mangalore",
    description:
      "Stay updated with official exam circulars, notices, and important academic announcements from Canara PU College.",
    url: "https://canarapucollege.com/exam-circulars",
    siteName: "Canara PU College Mangalore",
    images: [
      {
        url: "/icon.png", // update if you have a banner
        width: 1200,
        height: 630,
        alt: "Exam Circulars - Canara PU College",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Exam Circulars – Canara PU College, Mangalore",
    description:
      "View the latest exam circulars, academic notifications, and official announcements from Canara Pre-University College.",
    images: ["/icon.png"],
  },
};

const page = () => {
  return (
   <>
    <Banner  />
    <section>
        <ExamCircularPageComponent/>
    </section>
   </>
  )
}

export default page