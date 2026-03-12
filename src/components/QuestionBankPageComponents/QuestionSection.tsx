"use client";

import { useEffect, useState } from "react";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "@/utils/firebase";
import { AnimatePresence, motion } from "framer-motion";
import { Download } from "../../../public/icons";
import { UpArrow, DownArrow } from "../../../public/icons";

interface PaperItem {
  id: string;
  subjectName: string;
  pdfUrl: string;
  fileName: string;
  category: "firstYear" | "secondYear";
}

const QuestionSection = ({ papers }: { papers: PaperItem[] }) => {
  const [showFirstYear, setShowFirstYear] = useState(false);
  const [showSecondYear, setShowSecondYear] = useState(false);

  // 🔹 Split data by category
  const firstYear = papers.filter((paper) => paper.category === "firstYear");

  const secondYear = papers.filter((paper) => paper.category === "secondYear");

  return (
    <section className="max-w-7xl xl:max-w-[75%] px-5 mx-auto my-10 lg:my-16 text-[#1D1D1F]">
      <div>
        <h1 className="font-bold text-[30px] lg:text-[45px]">Question Bank</h1>

        {/* ================= 1st Year ================= */}
        <div onClick={() => setShowFirstYear(!showFirstYear)} className="flex gap-2 cursor-pointer justify-between mt-5 lg:mt-10">
          <h1 className="text-xl font-bold">1st Year Question Papers</h1>
          {showFirstYear ? <UpArrow /> : <DownArrow />}
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
        <div onClick={() => setShowSecondYear(!showSecondYear)} className="flex cursor-pointer justify-between gap-2 mt-10">
          <h1 className="text-xl font-bold">2nd Year Question Papers</h1>
          {showSecondYear ? <UpArrow /> : <DownArrow />}
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

// "use client";
// import React, { useState } from "react";

// import { UpArrow, DownArrow, Download } from "../../../public/icons";
// import { motion, AnimatePresence } from "framer-motion";

// const firstYear = [
//   { name: "Kannada", link: "/question-bank/first-year/i-puc-kannada.pdf" },
//   { name: "English", link: "/question-bank/first-year/1st-puc-english.pdf" },
//   {
//     name: "Hindi",
//     link: "/question-bank/first-year/revised-hindi-i-puc--2024-25.pdf",
//   },
//   {
//     name: "Sanskrit",
//     link: "/question-bank/first-year/1st-puc-sanskrit-qb-2024-25.pdf",
//   },
//   {
//     name: "History",
//     link: "/question-bank/first-year/1st-pu-em-history-revised-question-bank-2024-25.pdf",
//   },
//   {
//     name: "Economics",
//     link: "/question-bank/first-year/i-puc-eco-qb-2024-eng.pdf",
//   },
//   {
//     name: "Business Studies",
//     link: "/question-bank/first-year/i-puc-qb-business-studies-revised-13-12-24.pdf",
//   },
//   {
//     name: "Accountancy",
//     link: "/question-bank/first-year/i-puc---accountancy-rqb.pdf",
//   },
//   {
//     name: "Statistics",
//     link: "/question-bank/first-year/i-pu-statistics.pdf",
//   },
//   {
//     name: "Physics",
//     link: "/question-bank/first-year/i-puc-physics-qb-24-25-2.pdf",
//   },
//   {
//     name: "Chemistry",
//     link: "/question-bank/first-year/i-pu-chemistry-question-bank.pdf",
//   },
//   {
//     name: "Mathematics",
//     link: "/question-bank/first-year/final-i-puc-maths-qb-24-25.pdf",
//   },
//   {
//     name: "Biology",
//     link: "/question-bank/first-year/ipuc--biology-revised-qb-2024-25-final-(1).pdf",
//   },
//   {
//     name: "Electronics",
//     link: "/question-bank/first-year/i-puc-electronics-40-revised-question-bank-2024-25-19-11-24-1.pdf",
//   },
//   {
//     name: "Computer Science",
//     link: "/question-bank/first-year/i-pu-compscience-question-bank-englishmedium2024-25-(1).pdf",
//   },
//   {
//     name: "Basic Mathematics",
//     link: "/question-bank/first-year/i-puc-basic-maths-qb-2024---25.pdf",
//   },
// ];

// const secondYear = [
//   {
//     name: "Kannada",
//     link: "/question-bank/second-year/II PU KANNADA QP BANK FINAL-2.pdf",
//   },
//   {
//     name: "English",
//     link: "/question-bank/second-year/II PU English Question Bank 2025 Final.pdf",
//   },
//   {
//     name: "Hindi",
//     link: "/question-bank/second-year/REVISED HINDI II PUC- 2024-25.pdf",
//   },
//   {
//     name: "Sanskrit",
//     link: "/question-bank/second-year/2nd_PUC_SANSKRIT_QB_2024-25.pdf",
//   },
//   {
//     name: "History",
//     link: "/question-bank/second-year/2nd PU EM New Indian History Revised Question Bank 2024-25.pdf",
//   },
//   {
//     name: "Economics",
//     link: "/question-bank/second-year/II PUC ECO_QB_2024_Eng.pdf",
//   },
//   {
//     name: "Business Studies",
//     link: "/question-bank/second-year/II PU BUSINESS STUDIES ENGLISH REVISED 13-12-24.pdf",
//   },
//   {
//     name: "Accountancy",
//     link: "/question-bank/second-year/II PUC - Accountancy RQB.pdf",
//   },
//   {
//     name: "Statistics",
//     link: "/question-bank/second-year/II PUC Statistics (31 )QB English.pdf",
//   },
//   {
//     name: "Physics",
//     link: "/question-bank/second-year/II PUC Physics-QB-24-25-1.pdf",
//   },
//   {
//     name: "Chemistry",
//     link: "/question-bank/second-year/II PU Chemistry question bank-3.pdf",
//   },
//   {
//     name: "Mathematics",
//     link: "/question-bank/second-year/II_PUC_MATHEMATICS_QB_24-25.pdf",
//   },
//   {
//     name: "Biology",
//     link: "/question-bank/second-year/IIPUC-BIOLOGY REVISED QB 2024 - 25 FinaL.pdf",
//   },
//   {
//     name: "Electronics",
//     link: "/question-bank/second-year/II PUC Electronics_40_Revised_Question_Bank_2024_25 19_11_24-1.pdf",
//   },

//   {
//     name: "Basic Mathematics",
//     link: "/question-bank/second-year/II PUC Basic Maths QB 2024 - 25.pdf",
//   },
// ];

// const QuestionSection = () => {
//   const [showFirstYear, setShowFirstYear] = useState<boolean>(false);
//   const [showSecondYear, setShowSecondYear] = useState<boolean>(false);

//   return (
//     <section className="max-w-7xl xl:max-w-[75%] px-5 mx-auto my-10 lg:my-16 text-[#1D1D1F] ">
//       <div>
//         <h1 className=" font-bold text-[30px] lg:text-[45px]">Question Bank</h1>

//         {/* First Year Question Papers */}
//         <div
//           onClick={() => setShowFirstYear(!showFirstYear)}
//           className="flex gap-2 cursor-pointer justify-between mt-5 lg:mt-10"
//         >
//           <div className="flex items-center gap-3">
//             <h1 className="text-xl font-bold">1st Year Question Papers</h1>
//           </div>
//           <button onClick={() => setShowFirstYear(!showFirstYear)}>
//             {showFirstYear ? <UpArrow /> : <DownArrow />}
//           </button>
//         </div>

//         <AnimatePresence>
//           {showFirstYear && (
//             <motion.div
//               key="firstYear"
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ height: "auto", opacity: 1 }}
//               exit={{ height: 0, opacity: 0 }}
//               transition={{ duration: 0.6, ease: "easeInOut" }}
//               className="overflow-hidden"
//             >
//               {firstYear.map((item, index: number) => (
//                 <div
//                   className="flex justify-between mt-5 border-b-1 pb-1 border-[#e5e7ed]"
//                   key={index}
//                 >
//                   <h1 className="text-[17px] w-[50%] lg:w-auto text-[#2A2A2A]">
//                     {item.name}
//                   </h1>
//                   <a
//                     href={item.link}
//                     download
//                     className="cursor-pointer text-[17px] font-bold flex gap-2 items-center"
//                   >
//                     <Download /> Download Now
//                   </a>
//                 </div>
//               ))}
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Second Year Question Papers */}
//         <div
//           onClick={() => setShowSecondYear(!showSecondYear)}
//           className="flex cursor-pointer justify-between gap-2 mt-10"
//         >
//           <div className="flex items-center gap-3">
//             <h1 className="text-xl font-bold">2nd Year Question Papers</h1>
//           </div>
//           <button onClick={() => setShowSecondYear(!showSecondYear)}>
//             {showSecondYear ? <UpArrow /> : <DownArrow />}
//           </button>
//         </div>

//         <AnimatePresence>
//           {showSecondYear && (
//             <motion.div
//               key="secondYear"
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ height: "auto", opacity: 1 }}
//               exit={{ height: 0, opacity: 0 }}
//               transition={{ duration: 0.6, ease: "easeInOut" }}
//               className="overflow-hidden"
//             >
//               {secondYear.map((item, index: number) => (
//                 <div
//                   className="flex justify-between mt-5 border-b-1 pb-1 border-[#e5e7ed]"
//                   key={index}
//                 >
//                   <h1 className="text-[17px] w-[50%] lg:w-auto text-[#2A2A2A]">
//                     {item.name}
//                   </h1>
//                   <a
//                     href={item.link}
//                     download
//                     className="cursor-pointer text-[17px] font-bold flex gap-2 items-center"
//                   >
//                     <Download /> Download Now
//                   </a>
//                 </div>
//               ))}
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// };

// export default QuestionSection;
