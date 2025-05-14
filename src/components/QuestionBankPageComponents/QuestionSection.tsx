"use client";
import Image from "next/image";
import React, { useState } from "react";
import { science, commerce } from "@/utils/questionBank/questionBank";
import { UpArrow, DownArrow,Download } from "../../../public/icons";

const QuestionSection = () => {
  const [showScience, setShowScience] = useState<boolean>(false);
  const [showCommerce, setShowCommerce] = useState<boolean>(false);

  return (
    <section className="lg:mx-52 mx-5 text-black py-32">
      <div>
        <h1 className="mb-20 font-bold text-[45px]">Question Bank</h1>
        <div className="flex gap-2 justify-between">
          <div className="flex items-center gap-3">
            <Image src="/nav1.svg" alt="svg" width={20} height={20} className="" />
            <h1 className="text-xl font-extrabold">Science Streams</h1>
          </div>
          <button onClick={() => setShowScience(!showScience)}>{showScience ? <UpArrow /> : <DownArrow />}</button>
        </div>
        {showScience &&
          science.map((item, index) => {
            return (
              <div className="flex justify-between mt-5 border-b-1 pb-1 border-[#e5e7ed]" key={index}>
                <h1 className="text-[17px] text-[#86868B]">{item.name}</h1>
                <a download={item.link} className="cursor-pointer text-[17px] font-bold flex gap-2 items-center">
                 <Download/> Download Now
                </a>
              </div>
            );
          })}

        <div className="flex justify-between gap-2 mt-10">
          <div className="flex items-center gap-3">
            <Image src="/nav1.svg" alt="svg" width={20} height={20} className="" />
            <h1 className="text-xl font-extrabold">Commerce Streams</h1>
          </div>
          <button onClick={() => setShowCommerce(!showCommerce)}>{showCommerce ? <UpArrow /> : <DownArrow />}</button>
        </div>
        {showCommerce &&
          commerce.map((item, index) => {
            return (
               <div className="flex justify-between mt-5 border-b-1 pb-1 border-[#e5e7ed]" key={index}>
                <h1 className="text-[17px] text-[#86868B]">{item.name}</h1>
                <a download={item.link} className="cursor-pointer text-[17px] font-bold flex gap-2 items-center">
                 <Download/> Download Now
                </a>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default QuestionSection;
