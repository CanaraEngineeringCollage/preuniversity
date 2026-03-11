export const dynamic = "force-dynamic";
import Banner from "@/components/Common/Banner/Banner";
import QuestionSection from "@/components/QuestionBankPageComponents/QuestionSection";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Question Bank – Canara Pre-University College, Mangalore",
  description:
    "Access the comprehensive Question Bank of Canara Pre-University College, Mangalore. Download previous years’ question papers, model questions, and practice sets for PUC I & II Science and Commerce streams.",
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
    url: "https://canarapucollege.com/question-bank",
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



interface PaperItem {
  id: string;
  subjectName: string;
  pdfUrl: string;
  fileName: string;
  category: "firstYear" | "secondYear";
}



async function getQuestionPapers() {
  const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL || "http://localhost:3000";
  
  try {
    // Increase limit to fetch all papers or handle pagination
    const res = await fetch(`${cmsUrl}/api/question-papers?limit=100`, {
      cache: 'no-store',
    });

    if (!res.ok) return [];

    const data = await res.json();
    
    // MAP CMS fields to the PaperItem interface expected by your components
    return data.items.map((paper: any) => ({
      id: paper.id.toString(),
      subjectName: paper.subject, // Map 'subject' from CMS to 'subjectName'
      pdfUrl: `${cmsUrl}${paper.fileUrl}`, // Prefix with CMS URL so PDF opens
      fileName: paper.name, // Map 'name' from CMS to 'fileName'
      category: paper.year === "PUC1" ? "firstYear" : "secondYear", // Map year logic
    }));
  } catch (error) {
    console.error("Failed to load Question Papers from CMS:", error);
    return [];
  }
}

const Page = async () => {
  const papers = await getQuestionPapers();

  return (
    <>
      <section><Banner /></section>
      <section><QuestionSection papers={papers} /></section>
    </>
  );
};

export default Page;
