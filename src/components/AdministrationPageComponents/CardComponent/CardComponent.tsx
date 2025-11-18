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
      <h1 className="text-black text-[40px] lg:text-[54px] mb-10 mt-10 md:mb-20 font-bold text-center">Administrative Body</h1>

      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8 justify-items-center">
        {data.map((item, index) => {
          const isLastCard = index === data.length - 1;
          const remainder = data.length % 3;
          const shouldCenterLast = remainder === 1 && isLastCard;

          return (
            <div
              key={index}
              className={`relative cursor-pointer w-full max-w-[309px] h-[450px] rounded-xl overflow-hidden bg-[#6DC0EB] text-white flex flex-col items-center py-6 shadow-md ${
                shouldCenterLast ? "md:col-start-2 xl:col-start-auto" : ""
              }`}
            >
              <Image
                onClick={() => router.push(`/user-details/${item.id}`)}
                src={item.image}
                alt={item.name}
                width={300}
                height={300}
                className="rounded-full scale-110 w-full object-cover"
              />
              <Link href={`/user-details/${item.id}`}>
                <div className="absolute bottom-0 left-0 w-full h-56 bg-[linear-gradient(to_top,#6DC0EB_40%,transparent)] z-10"></div>
                <div className="absolute z-10 bottom-5 left-6">
                  <h2 className="text-[20px] font-bold">{item.name}</h2>
                  <p className="text-[17px]">
                    {item.roles.map((role, idx) => (
                      <div key={idx}>
                        {role.title}
                        {role.organization && (
                          <>
                            {" "}
                            , <span className="font-semibold">{role.organization}</span>
                          </>
                        )}
                      </div>
                    ))}
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AdministrationMembers;
