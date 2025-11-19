import React from "react";
import image from "../../../../public/images/aboutPageImages/dean.webp";
import Image from "next/image";

const DeanMessage = () => {
  return (
    <div className="max-w-5xl xl:max-w-[60%] mx-auto mt-10 lg:mt-28 px-5">

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-0">

        {/* Text section */}
        <div className="md:col-span-7 text-center md:text-left">
          <h2 className="text-[#1D1D1F] leading-[1.1] md:text-3xl lg:text-4xl lg2:text-[45px] text-3xl font-bold">
            Message from the Dean
          </h2>
 <div className=" pt-5 flex lg:hidden flex-col items-center text-center">
          <Image
            src={image}
            alt="Dean"
            className="object-cover rounded-2xl w-full h-[350px] sm:h-[400px] md:h-[436px]"
          />

          <h2 className="text-[#1D1D1F] text-2xl sm:text-[27px] font-bold pt-6 md:pt-9">
            Sri. Gopalakrishna
          </h2>

          <h2 className="text-[#1D1D1F] text-2xl sm:text-[27px] font-bold">
            Shetty K M
          </h2>
        </div>
          <div className="text-[#86868B] pt-3 sm:pt-8 flex flex-col text-base sm:text-lg lg2:text-xl leading-relaxed">

            <p className="pt-4">
              Vision, when turned inward, becomes Duty. When it looks outward, it becomes Aspiration.
              When it looks upward, it becomes Faith.
            </p>

            <p>
              These words by Stephens S. reflect the ethos of Canara Institution—committed to
              nurturing talent & skill over the years.
            </p>

            <p className="pt-8 sm:pt-12">
              In a world of constant change & global competition, our Management & Staff strive to
              shape students into balanced individuals—culturally refined, emotionally grounded,
              ethically guided, intellectually alert, socially responsible, spiritually upright &
              physically strong. We pray to the Almighty to give us the strength to enrich the path
              laid down by our noble Founder in serving the student community at large.
            </p>

            <p className="pt-8 sm:pt-12">
              We pray for the strength to continue walking the path envisioned by our Founder,
              in service of the student community
            </p>

          </div>
        </div>

        {/* Spacer for desktop */}
        <div className="hidden md:block md:col-span-1"></div>

        {/* Image section */}
        <div className="lg:col-span-4 hidden lg:flex flex-col items-center text-center">
          <Image
            src={image}
            alt="Dean"
            className="object-cover rounded-2xl w-full h-[350px] sm:h-[400px] md:h-[436px]"
          />

          <h2 className="text-[#1D1D1F] text-2xl sm:text-[27px] font-bold pt-6 md:pt-9">
            Sri. Gopalakrishna
          </h2>

          <h2 className="text-[#1D1D1F] text-2xl sm:text-[27px] font-bold">
            Shetty K M
          </h2>
        </div>

      </div>
    </div>
  );
};

export default DeanMessage;
