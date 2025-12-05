"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import governingCounsilData from "../../../utils/administrativeMembersData/administrativeMembersData.json";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface CouncilMember {
  id: number;
  name: string;
  image: string;
  roles: { title: string; organization: string }[];
}

const AdministrationMembers = () => {
  const [data, setData] = useState<CouncilMember[]>([]);
  const router = useRouter();

  useEffect(() => {
    setData(governingCounsilData);
  }, []);
  return (
    <section className="pb-20 px-4 sm:px-8 md:px-16 lg:px-64 xl:px-64">
      <h1 className="text-[#1D1D1F] text-[30px] lg:text-[54px] mb-10 mt-10 md:mb-10 font-bold text-center">Management</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8 justify-items-center">
        {data.map((item, index) => {
          const isLastCard = index === data.length - 1;
          const remainder = data.length % 3;
          const shouldCenterLast = remainder === 1 && isLastCard;

          return (
        <div
  key={index}
  className={`relative  w-full max-w-[309px] aspect-[3/4] rounded-xl overflow-hidden bg-[#6DC0EB] text-white flex flex-col items-center shadow-md ${
    shouldCenterLast ? "md:col-start-2 xl:col-start-auto" : ""
  }`}
>
  {/* Image fills card completely */}
  <Image
    src={item.image}
    alt={item.name}
    fill
    className="object-cover" // removed padding to avoid gap
  />

  {/* Responsive gradient */}
  <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-[#6DC0EB] via-[#6DC0EB]/70 to-transparent z-10"></div>

  {/* Content */}
  <div className="absolute z-20 bottom-3 sm:bottom-4 px-2 sm:px-3 md:px-4 left-0 w-full">
    <h2 className="text-base sm:text-lg md:text-xl font-bold leading-tight ">
      {item.name}
    </h2>
    <p className="text-xs sm:text-sm md:text-base leading-snug break-words">
      {item.roles.map((role, idx) => (
        <span key={idx} className="">
          {role.title}
          {item.roles.length > 1 && role.organization && ","}{" "}
          <span className="font-semibold">{role.organization}</span>
          {idx < item.roles.length - 1 && <br />}
        </span>
      ))}
    </p>
  </div>
</div>

          );
        })}
      </div>
    </section>
  );
};

export default AdministrationMembers;
