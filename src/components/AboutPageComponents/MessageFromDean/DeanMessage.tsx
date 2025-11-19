import React from "react";
import image from "../../../../public/images/aboutPageImages/dean.webp";
import Image from "next/image";

const DeanMessage = () => {
  return (
    <div className="max-w-5xl xl:max-w-[60%] mx-auto mt-10 lg:mt-28 px-5">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-0">
        {/* Text section */}
        <div className="md:col-span-7 text-center md:text-left">
          <h2 className="text-[#1D1D1F] leading-[1.1] md:text-3xl lg:text-4xl lg2:text-[45px] text-3xl font-bold">Message from the Dean</h2>
          <div className=" pt-5 flex lg:hidden flex-col items-center text-center">
            <Image src={image} alt="Dean" className="object-cover rounded-2xl w-full h-[350px] sm:h-[400px] md:h-[436px]" />

            <h2 className="text-[#1D1D1F] text-2xl sm:text-[27px] font-bold pt-6 md:pt-9">Sri. Gopalakrishna</h2>

            <h2 className="text-[#1D1D1F] text-2xl sm:text-[27px] font-bold">Shetty K M</h2>
          </div>
          <div className="text-[#86868B] pt-3 sm:pt-3 flex flex-col text-base sm:text-lg  leading-relaxed">
            <p className="pt-4">
              Vision, when turned inward, becomes Duty. When it looks outward, it becomes Aspiration. When it looks upward, it becomes Faith.
            </p>

            <p>
              These words of Stephens S, wise echoes the sentiments and commitment of Canara Institution which over the years has become the showcase
              of talent and skill.
            </p>

            <p className="pt-8 sm:pt-3">
              The world today, unlike the past, is ever changing, distance is dying and barriers are becoming thin and nonexistent. Even in the field
              of education there exists global competition. In such a scenario the Management and Staff of our institution have tried to develop
              balanced personalities of the students who are culturally refined, emotionally stable, ethically oriented, intellectually alert,
              socially responsible, spiritually upright and physically strong.
            </p>

            <p className="pt-8 sm:pt-3">
              We pray to the Almighty to give us the strength to enrich the path laid down by our noble Founder in serving the student community at
              large.
            </p>
          </div>
        </div>

        {/* Spacer for desktop */}
        <div className="hidden md:block md:col-span-1"></div>

        {/* Image section */}
        <div className="lg:col-span-4 hidden lg:flex flex-col items-center text-center">
          <Image src={image} alt="Dean" className="object-cover rounded-2xl w-full h-[350px] sm:h-[400px] md:h-[436px]" />

          <h2 className="text-[#1D1D1F] text-2xl sm:text-[27px] font-bold pt-6 md:pt-9">Sri. Gopalakrishna</h2>

          <h2 className="text-[#1D1D1F] text-2xl sm:text-[27px] font-bold">Shetty K M</h2>
        </div>
      </div>
    </div>
  );
};

export default DeanMessage;
