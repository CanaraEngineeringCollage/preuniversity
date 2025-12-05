"use client";

import Image from "next/image";
import React from "react";
import { science, commerce } from "@/utils/questionBank/questionBank";
import { Download } from "../../../public/icons";

const QuestionSection = () => {
  return (
    <section className="max-w-7xl xl:max-w-[75%] px-5 mx-auto my-10 lg:my-16 text-[#1D1D1F]">
      <div>
        <h1 className="font-bold text-[30px] lg:text-[45px] mb-7 lg:mb-10">Question Bank</h1>

        {/* Science Section (NO DROPDOWN) */}
       

        <div className="mt-4">
          {science.map((item: any, index: number) => (
            <div
              className="flex justify-between mt-5 border-b-1 pb-1 border-[#e5e7ed]"
              key={index}
            >
              <h1 className="text-[17px] w-[50%] lg:w-auto text-[#2A2A2A]">{item.name}</h1>
              <a
                href={item.link}
                download
                className="cursor-pointer text-[17px] font-bold flex gap-2 items-center"
              >
                <Download /> Download Now
              </a>
            </div>
          ))}
        </div>

        {/* Commerce Section (NO DROPDOWN) */}
        

        <div className="mt-4">
          {commerce.map((item: any, index: number) => (
            <div
              className="flex justify-between mt-5 border-b-1 pb-1 border-[#e5e7ed]"
              key={index}
            >
              <h1 className="text-[17px] w-[50%] lg:w-auto text-[#2A2A2A]">{item.name}</h1>
              <a
                href={item.link}
                download
                className="cursor-pointer text-[17px] font-bold flex gap-2 items-center"
              >
                <Download /> Download Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuestionSection;
