import Image from "next/image";
import React from "react";

const Results = ({ image, text,title }: { image: string; text: string,title:string }) => {
  return (
    <section className="text-[#1D1D1F] relative w-full overflow-hidden pb-10 lg:pb-20">
      <div className="relative h-[65vh] lg:h-[80vh] w-screen flex justify-center items-center">
        {/* Correct Image Placement */}
        <Image
          src={image}
          alt=""
          layout="fill"
          objectFit="cover"
          className="z-0 !h-[65vh] hidden lg:block"     
        />
          <Image
          src={image}
          alt=""
          layout="fill"
          objectFit="cover"
          className="z-0 !h-[50vh] lg:hidden"     
        />

        {/* Input & Button Box */}
        <div className="absolute bottom-0 z-[999] w-full left-0 text-center flex justify-center">
        
          <div className="lg:mx-20 mx-4 rounded-2xl w-full bg-[#F5F5F7] px-3.5 lg:px-28 pt-10 ">
         <h1 className="leading-[1.1] md:text-2xl lg:text-2xl lg2:text-4xl text-[#1D1D1F] text-2xl font-bold pb-10">{title}</h1>
              <form >
            <div className="mb-10 flex justify-between gap-5 lg:gap-20">
              <input
              required
                type="text"
                placeholder="Your Roll Number"
                className="w-full outline-none border-b-2 pb-2 border-[#d0d0d2]"
              />
              <input
              required
                type="text"
                placeholder="Your  Date of Birth"
                className="w-full outline-none border-b-2 pb-2 border-[#d0d0d2]"
              />
            </div>
            <button className="text-center text-white cursor-pointer px-6 sm:px-8 py-2 rounded-3xl bg-[#2884CA]">
              {text}
            </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Results;
