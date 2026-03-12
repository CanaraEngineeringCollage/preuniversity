"use client";

import Banner from "@/components/Common/Banner/Banner";
import QuestionSection from "@/components/QuestionBankPageComponents/QuestionSection";
import React, { useEffect, useState } from "react";

export interface PaperItem {
  id: string;
  subjectName: string;
  pdfUrl: string;
  fileName: string;
  category: "firstYear" | "secondYear";
}

async function getQuestionPapers(category: string): Promise<PaperItem[]> {
  const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL || "http://localhost:3000";
  
  try {
    // We pass the specific category directly to the backend
    const res = await fetch(`${cmsUrl}/api/question-papers?limit=100&category=${category}`, {
      cache: 'no-store',
    });

    if (!res.ok) return [];

    const data = await res.json();
    
    // Map the database fields to the frontend properties
    return data.items.map((paper: any) => ({
      id: paper.id.toString(),
      subjectName: paper.subject, 
      pdfUrl: `${cmsUrl}${paper.fileUrl}`, 
      fileName: paper.name, 
      category: paper.year, // The DB stores 'firstYear' or 'secondYear' here
    }));
  } catch (error) {
    console.error(`Failed to load ${category} Question Papers from CMS:`, error);
    return [];
  }
}

export default function QuestionBankClient() {
  const [firstYearPapers, setFirstYearPapers] = useState<PaperItem[]>([]);
  const [secondYearPapers, setSecondYearPapers] = useState<PaperItem[]>([]);

  useEffect(() => {
    let isMounted = true;
    
    // Fetch both years concurrently using the correct DB category names
    Promise.all([
      getQuestionPapers("firstYear"),
      getQuestionPapers("secondYear")
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
      <section>
        {/* Pass the already separated arrays to the child component */}
        <QuestionSection firstYear={firstYearPapers} secondYear={secondYearPapers} />
      </section>
    </>
  );
}