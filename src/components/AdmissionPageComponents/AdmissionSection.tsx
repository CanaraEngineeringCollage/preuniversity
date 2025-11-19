"use client";
import React, { useState } from "react";
import AdmissionData from "../../utils/admissionData/admissionData.json";

const AdmissionSection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <section className="py-20 xl:py-36 text-[#1D1D1F] lg2:px-24 mx-5 overflow-hidden">
      <div className="">
        <h1 className="text-[30px] lg:text-[54px] font-bold pb-1 lg:pb-10 text-[#1D1D1F]">Admissions</h1>
        <div className="grid grid-cols-1 gap-3 md:gap-32 md:grid-cols-12 mt-10">
          <div className="col-span-4">
            {AdmissionData?.map((section, index) => (
              <h1
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`border-b-2 text-[20px] pb-3 mb-3 border-[#e5e7ed] cursor-pointer ${
                  selectedIndex === index ? "text-[#2884CA] font-bold" : "text-[#86868B] font-[500]"
                }`}
              >
                {section.title}
              </h1>
            ))}
          </div>
          <div className="col-span-8 mt-7">
            {AdmissionData[selectedIndex]?.subTitle && <p className="text-[17px] mb-3 text-[#86868B]  cursor-pointer">{AdmissionData[selectedIndex].subTitle}</p>}
            {AdmissionData[selectedIndex]?.data && (
              <>
                <ul className="list-disc pl-5 space-y-1  lg:me-24">
                  {AdmissionData[selectedIndex].data[0]?.points?.map((point, i) => (
                    <li key={i} className="text-[17px] text-[#86868B]  cursor-pointer">
                      {point}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
        <div className="mt-20 space-y-2">
          <h1 className="font-extrabold text-2xl">Acceptance of Rules of Selection & Admission</h1>
          <p className="text-[#86868B] text-[17px]">
            Every candidate will deemed to have accepted the rules by the very act of submitting his / her application.
          </p>
        </div>
        <div className="mt-20 space-y-2">
          <h1 className="font-extrabold text-2xl">All correspondence should be addressed to</h1>
          <p className="text-[#86868B] text-[17px]">The Dean, Canara Pre-University College, M.G. Road, Mangaluru – 575003.</p>
          <p className="text-[#86868B] text-[17px]">
            <span className="font-bold">Tel No’s:</span> 0824-2495605 (O), 2492561 (P).
            <span className="lg:ml-20">
              <span className="font-bold">Email:</span> canarapu@gmail.com
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdmissionSection;
