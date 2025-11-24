"use client";
import Image from "next/image";
import React, { useState } from "react";
import { science, commerce } from "@/utils/questionBank/questionBank";
import { UpArrow, DownArrow,Download } from "../../../public/icons";
import { motion, AnimatePresence } from "framer-motion";

const QuestionSection = () => {
  const [showScience, setShowScience] = useState<boolean>(false);
  const [showCommerce, setShowCommerce] = useState<boolean>(false);

  return (
    <section className="max-w-7xl xl:max-w-[75%] px-5 mx-auto my-10 lg:my-16 text-[#1D1D1F] ">
      <div>
        <h1 className=" font-bold text-[30px] lg:text-[45px]">Question Bank</h1>

        {/* Science Stream */}
        <div className="flex gap-2 justify-between mt-5 lg:mt-10">
          <div className="flex items-center gap-3">
            <Image src="/nav1.svg" alt="svg" width={20} height={20} />
            <h1 className="text-xl font-bold">Science Streams</h1>
          </div>
          <button onClick={() => setShowScience(!showScience)}>
            {showScience ? <UpArrow /> : <DownArrow />}
          </button>
        </div>

        <AnimatePresence>
          {showScience && (
            <motion.div
              key="science"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              {science.map((item: any, index: number) => (
                <div
                  className="flex justify-between mt-5 border-b-1 pb-1 border-[#e5e7ed]"
                  key={index}
                >
                  <h1 className="text-[17px] w-[50%] lg:w-auto text-[#2A2A2A]">{item.name}</h1>
                  <a
                    download={item.link}
                    className="cursor-pointer text-[17px] font-bold flex gap-2 items-center"
                  >
                    <Download /> Download Now
                  </a>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Commerce Stream */}
        <div className="flex justify-between gap-2 mt-10">
          <div className="flex items-center gap-3">
            <Image src="/nav1.svg" alt="svg" width={20} height={20} />
            <h1 className="text-xl font-bold">Commerce Streams</h1>
          </div>
          <button onClick={() => setShowCommerce(!showCommerce)}>
            {showCommerce ? <UpArrow /> : <DownArrow />}
          </button>
        </div>

        <AnimatePresence>
          {showCommerce && (
            <motion.div
              key="commerce"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              {commerce.map((item: any, index: number) => (
                <div
                  className="flex justify-between mt-5 border-b-1 pb-1 border-[#e5e7ed]"
                  key={index}
                >
                  <h1 className="text-[17px] w-[50%] lg:w-auto text-[#2A2A2A]">{item.name}</h1>
                  <a
                    download={item.link}
                    className="cursor-pointer text-[17px] font-bold flex gap-2 items-center"
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
