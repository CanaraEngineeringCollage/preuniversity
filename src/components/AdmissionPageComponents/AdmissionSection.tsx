"use client";
import React, { useState } from "react";
import AdmissionData from "../../utils/admissionData/admissionData.json";
import CustomSelect from "../Common/CustomSelect/CustomSelect";

const AdmissionSection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const index = AdmissionData.findIndex((section) => section.title === e.target.value);
    if (index !== -1) {
      setSelectedIndex(index);
    }
  };

  return (
    <section className="py-10 lg:py-16  text-[#1D1D1F] lg2:mx-24 mx-5 overflow-hidden">
      <div className="">
        <h1 className="text-[30px] lg:text-[54px] font-bold pb-1  text-[#1D1D1F]">Admissions</h1>
        
        {/* Mobile Select Dropdown */}
        <div className="md:hidden mt-7">
          <CustomSelect
            value={AdmissionData[selectedIndex].title}
            onChange={handleSelectChange}
            options={AdmissionData.map((section) => section.title)}
          />
        </div>

        <div className="grid grid-cols-1 text-justify  md:grid-cols-12 mt-2 md:mt-10">
          {/* Desktop Sidebar - Hidden on mobile */}
          <div className="col-span-4 hidden md:block">
            {AdmissionData?.map((section, index) => (
              <h1
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`border-b-2 text-[20px] pb-3 mb-3 border-[#e5e7ed] cursor-pointer ${
                  selectedIndex === index ? "text-[#2884CA] font-bold" : "text-[#2A2A2A] font-[500]"
                }`}
              >
                {section.title}
              </h1>
            ))}
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-7 mt-7 md:mt-0">
            {AdmissionData[selectedIndex]?.subTitle && (
              <p className= "md:text-lg text-[14px] leading-7 mb-3 text-[#2A2A2A]  cursor-pointer">{AdmissionData[selectedIndex].subTitle}</p>
            )}
            {AdmissionData[selectedIndex]?.data && (
              <>
                <ul className="list-disc pl-5 space-y-1 ">
                  {AdmissionData[selectedIndex].data[0]?.points?.map((point, i) => (
                    <li key={i} className= "md:text-lg text-[14px] leading-7 text-[#2A2A2A]  cursor-pointer">
                      {point}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
        <hr className="mt-10 md:mt-16 border-t-2 border-[#e5e7ed]" />

        <div className="mt-10 lg:mt-16 space-y-2">
          <h1 className="font-extrabold text-xl">Acceptance of Rules of Selection & Admission</h1>
          <p className="text-[#2A2A2A]  md:text-lg text-[14px] leading-7">
            Every candidate will deemed to have accepted the rules by the very act of submitting his / her application
          </p>
        </div>
        <div className="mt-10  space-y-2">
          <h1 className="font-extrabold text-xl">All correspondence should be addressed to</h1>
          <p className="text-[#2A2A2A]  md:text-lg text-[14px] leading-7">The Dean, Canara Pre-University College, M.G. Road, Mangaluru – 575003</p>
          <p className="text-[#2A2A2A]  md:text-lg text-[14px] leading-7">
            <span className="font-bold">Tel No’s:</span> 0824-2495605 (O), 2492561 (P)
          </p>
            <p className="text-[#2A2A2A]  md:text-lg text-[14px] leading-7">
            <span className="font-bold">Email:</span>  canarapu@gmail.com
          </p>
        
        </div>
      </div>
    </section>
  );
};

export default AdmissionSection;
