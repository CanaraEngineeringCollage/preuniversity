"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, UpArrow, DownArrow } from "../../../public/icons";

interface PaperItem {
  id: string;
  subjectName: string;
  pdfUrl: string;
  fileName: string;
  category: "firstYear" | "secondYear";
}

interface QuestionSectionProps {
  firstYear: PaperItem[];
  secondYear: PaperItem[];
}

const QuestionSection = ({ firstYear, secondYear }: QuestionSectionProps) => {
  const [showFirstYear, setShowFirstYear] = useState(false);
  const [showSecondYear, setShowSecondYear] = useState(false);

  return (
    <section className="max-w-7xl xl:max-w-[75%] px-5 mx-auto my-10 lg:my-16 text-[#1D1D1F]">
      <div>
        <h1 className="font-bold text-[30px] lg:text-[45px]">Question Bank</h1>

        {/* ================= 1st Year ================= */}
        <div 
          onClick={() => setShowFirstYear(!showFirstYear)} 
          className="flex gap-2 cursor-pointer justify-between mt-5 lg:mt-10 items-center"
        >
          <h1 className="text-xl font-bold">1st Year Question Papers</h1>
          <button>
            {showFirstYear ? <UpArrow /> : <DownArrow />}
          </button>
        </div>

        <AnimatePresence>
          {showFirstYear && (
            <motion.div
              key="firstYear"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              {firstYear.length === 0 && <p className="mt-4 text-gray-500">No papers available</p>}

              {firstYear.map((item) => (
                <div key={item.id} className="flex justify-between mt-5 border-b pb-2 border-[#e5e7ed]">
                  <h1 className="text-[17px] w-[60%] text-[#2A2A2A]">{item.subjectName}</h1>

                  <a
                    href={item.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    download={item.fileName}
                    className="text-[17px] font-bold flex gap-2 items-center"
                  >
                    <Download /> Download Now
                  </a>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ================= 2nd Year ================= */}
        <div 
          onClick={() => setShowSecondYear(!showSecondYear)} 
          className="flex cursor-pointer justify-between gap-2 mt-10 items-center"
        >
          <h1 className="text-xl font-bold">2nd Year Question Papers</h1>
          <button>
            {showSecondYear ? <UpArrow /> : <DownArrow />}
          </button>
        </div>

        <AnimatePresence>
          {showSecondYear && (
            <motion.div
              key="secondYear"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              {secondYear.length === 0 && <p className="mt-4 text-gray-500">No papers available</p>}

              {secondYear.map((item) => (
                <div key={item.id} className="flex justify-between mt-5 border-b pb-2 border-[#e5e7ed]">
                  <h1 className="text-[17px] w-[60%] text-[#2A2A2A]">{item.subjectName}</h1>

                  <a
                    href={item.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    download={item.fileName}
                    className="text-[17px] font-bold flex gap-2 items-center"
                  >
                    <Download /> Download Now
                  </a>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default QuestionSection;