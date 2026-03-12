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

// 🔹 Added category parameter to use the backend filter
async function getQuestionPapers(yearCategory: string) {
  const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL || "http://localhost:3000";
  
  try {
    // 🔹 Pass the category to your API route
    const res = await fetch(`${cmsUrl}/api/question-papers?limit=100&category=${yearCategory}`, {
      cache: 'no-store',
    });

    if (!res.ok) return [];

    const data = await res.json();
    
    return data.items.map((paper: any) => ({
      id: paper.id.toString(),
      subjectName: paper.subject, 
      pdfUrl: `${cmsUrl}${paper.fileUrl}`, 
      fileName: paper.name, 
      category: paper.year === "PUC1" ? "firstYear" : "secondYear",
    }));
  } catch (error) {
    console.error(`Failed to load ${yearCategory} Question Papers:`, error);
    return [];
  }
}

export default function QuestionBankClient() {
  const [firstYearPapers, setFirstYearPapers] = useState<PaperItem[]>([]);
  const [secondYearPapers, setSecondYearPapers] = useState<PaperItem[]>([]);

  useEffect(() => {
    let isMounted = true;
    
    // 🔹 Fetch both categories concurrently from the backend
    Promise.all([
      getQuestionPapers("PUC1"),
      getQuestionPapers("PUC2") // Replace "PUC2" if your DB uses a different string for 2nd year
    ]).then(([firstYearRes, secondYearRes]) => {
      if (isMounted) {
        setFirstYearPapers(firstYearRes);
        setSecondYearPapers(secondYearRes);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <section><Banner /></section>
      {/* 🔹 Pass the already separated arrays as props */}
      <section><QuestionSection firstYear={firstYearPapers} secondYear={secondYearPapers} /></section>
    </>
  );
}