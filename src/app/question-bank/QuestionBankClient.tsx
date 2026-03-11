"use client";

import Banner from "@/components/Common/Banner/Banner";
import QuestionSection from "@/components/QuestionBankPageComponents/QuestionSection";
import React, { useEffect, useState } from "react";

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

export default function QuestionBankClient() {
  const [papers, setPapers] = useState<PaperItem[]>([]);

  useEffect(() => {
    let isMounted = true;
    getQuestionPapers().then((res) => {
      if (isMounted) {
        setPapers(res);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <section><Banner /></section>
      <section><QuestionSection papers={papers} /></section>
    </>
  );
}
