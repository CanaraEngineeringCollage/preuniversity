import type { Metadata } from "next";
import QuestionBankClient from "./QuestionBankClient";
import React from "react";

export const metadata: Metadata = {
  title: "Question Bank – Canara Pre-University College, Mangalore",
  description:
    "Access the comprehensive Question Bank of Canara Pre-University College, Mangalore. Download previous years’ question papers, model questions, and practice sets for PUC I & II Science and Commerce streams.",
  alternates: { canonical: "/question-bank" },
  keywords: [
    "Canara PU College Question Bank",
    "PUC question papers Mangalore",
    "PUC previous year papers",
    "Canara College model questions",
    "PUC I year question bank",
    "PUC II year question bank",
    "Science question papers PU College",
    "Commerce question papers PU College",
    "PUC exam preparation Mangalore",
  ],
  authors: [
    {
      name: "Canara Pre-University College, Mangalore",
      url: "https://canarapucollege.com",
    },
  ],
  openGraph: {
    title: "Question Bank – Canara Pre-University College, Mangalore",
    description: "Download PUC I & II year question papers, model question banks, and exam preparation materials from Canara PU College.",
    url: "/question-bank",
    siteName: "Canara PU College Mangalore",
    images: [
      {
        url: "/icon.png", // replace with subject/question-related banner if available
        width: 1200,
        height: 630,
        alt: "Canara PU College Question Bank",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Question Bank – Canara PU College, Mangalore",
    description: "Access downloadable question papers and model exam sets for better PUC exam preparation.",
    images: ["/icon.png"],
  },
};

const Page = () => {
  return <QuestionBankClient />;
};

export default Page;
