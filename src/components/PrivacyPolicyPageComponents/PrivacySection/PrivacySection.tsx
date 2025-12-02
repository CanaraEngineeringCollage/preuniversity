"use client";
import React, { useState } from "react";
import privacyData from "../../../utils/privacyData/privacyData.json";

const PrivacySection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <section className="pt-12 pb-5 lg:py-24 xl:py-36 text-[#1D1D1F] overflow-hidden">
      <div className="lg2:mx-24 mx-5">
        <h1 className="text-3xl text-[#1D1D1F] md:text-[40px] lg2:text-5xl xl:text-6xl font-bold pb-1 lg:pb-10">
          Privacy Policy
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-12 mt-10">
          {/* Sidebar */}
          <div className="col-span-3">
            {privacyData?.map((section, index) => (
              <h1
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`border-b-2  pb-3 mb-3 border-[#e5e7ed] cursor-pointer ${
                  selectedIndex === index ? "text-[#2884CA] font-bold text-[20px]" : "text-[#2A2A2A] font-[500] text-[20px]"
                }`}
              >
                {section.title}
              </h1>
            ))}
          </div>

          <div className="col-span-1"></div>

          {/* Main Content */}
          <div className="col-span-8">
            {privacyData[selectedIndex]?.data?.map((item, idx) => (
              <div key={idx} className="mb-6">
                {item.datam?.map((value, i) => (
                  <p key={i} className={`md:text-lg  text-[14px]  text-[#2A2A2A] ${selectedIndex === 8 ? "pb-2" : "pb-4 leading-7"}`}>
                    {value}
                  </p>
                ))}

                {item.points?.length > 0 && (
                  <ul className="space-y-2 list-disc pl-5 md:text-lg  text-[14px] leading-7  text-[#2A2A2A] mb-4">
                    {item.points.map((point, j) => (
                      <li key={j} className="">
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;
