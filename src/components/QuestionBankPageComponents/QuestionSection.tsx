"use client";

import { useEffect, useState } from "react";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { Download } from "../../../public/icons";
import { db } from "@/utils/firebase";

interface PaperItem {
  id: string;
  subjectName: string;
  pdfUrl: string;
  fileName: string;
}

const QuestionSection = () => {
  const [papers, setPapers] = useState<PaperItem[]>([]);
  const [loading, setLoading] = useState(true);

  // FETCH DATA
  async function fetchPapers() {
    try {
      const q = query(
        collection(db, "question-papers"),
        orderBy("createdAt", "desc")
      );

      const snap = await getDocs(q);

      const list = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as PaperItem[];

      setPapers(list);
    } catch (error) {
      console.error("Failed to load Question Papers:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPapers();
  }, []);

  // OPEN PDF IN A NEW TAB (WORKS ALWAYS)
  const openPdf = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="max-w-7xl xl:max-w-[75%] px-5 mx-auto my-10 lg:my-16 text-[#1D1D1F]">
      <div>
        <h1 className="font-bold text-[30px] lg:text-[45px] mb-7 lg:mb-10">
          Question Bank
        </h1>

        <div className="mt-4">
          {papers.map((item, index) => (
            <div
              className="flex justify-between mt-5 border-b-1 pb-1 border-[#e5e7ed]"
              key={index}
            >
              <h1 className="text-[17px] w-[50%] lg:w-auto text-[#2A2A2A]">
                {item.subjectName}
              </h1>

              <button
                onClick={() => openPdf(item.pdfUrl)}
                className="cursor-pointer text-[17px] font-bold flex gap-2 items-center"
              >
                <Download /> Download Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuestionSection;
