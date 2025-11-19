import ExploreCampus from "@/components/Common/QuestionBank/QuestionBank";
import React from "react";
import data from "../../utils/exploreCampusData/exploreCampusData.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campus Buzz – News, Events & Updates | Canara Pre-University College",
  description:
    "Explore the latest campus buzz from Canara Pre-University College, Mangalore. Stay updated with recent events, achievements, announcements, and important happenings across our campus.",
  keywords: [
    "Canara PU College News",
    "PUC Events Mangalore",
    "Canara College Buzz",
    "Campus News Canara PU",
    "PUC Activities Mangalore",
    "Canara Institutions Updates",
    "College Achievements",
    "Campus Announcements",
    "Student Events Mangalore",
  ],
  authors: [
    {
      name: "Canara Pre-University College, Mangalore",
      url: "https://canarapucollege.com",
    },
  ],
  openGraph: {
    title: "Campus Buzz – Canara Pre-University College",
    description:
      "Stay informed with the latest events, achievements, and campus highlights from Canara PU College, Mangalore.",
    url: "https://canarapucollege.com/buzz",
    siteName: "Canara PU College Mangalore",
    images: [
      {
        url: "/icon.png", // update if you have a Buzz banner image
        width: 1200,
        height: 630,
        alt: "Canara PU College Campus Buzz",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Campus Buzz – Canara Pre-University College",
    description:
      "Latest news, updates, and achievements from Canara PU College, Mangalore.",
    images: ["/icon.png"],
  },
};

const page = () => {
  return (
    <div>

      <ExploreCampus
        campusEvents={data}
        title="Your Campus Hub"
        description="Stay updated with the latest news, events & achievements from across our campus"
      />
    </div>
  );
};

export default page;
