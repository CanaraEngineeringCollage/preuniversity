import React from "react";
import image from "../../../../public/images/aboutPageImages/dean.webp";
import Image from "next/image";
const DeanMessage = () => {
  return (
    <div className="max-w-5xl xl:max-w-[60%] mx-auto mt-28">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
        {/* Image section */}
        <div className="order-1 md:order-2 flex justify-center flex-col items-end">
          
          <Image src={image} alt="Dean" className="object-cover w-full max-w-[380px] h-auto md:h-[436px]" />
          <h2 className="text-[#1D1D1F] text-[27px] font-bold pt-6 md:pt-9">Sri. Gopalakrishna</h2>
          <h2 className="text-[#1D1D1F] text-[27px] font-bold">Shetty K M</h2>
        </div>

        {/* Text section */}
        <div className="order-2 md:order-1">
          <h2 className="text-[#1D1D1F] leading-[1.1] md:text-3xl lg:text-4xl lg2:text-[45px] text-3xl font-bold">Message from the Dean</h2>
          <div className="text-[#86868B] pt-8 flex flex-col lg2:text-xl">
            <p className="pt-4">
              Vision, when turned inward, becomes Duty. When it looks outward, it becomes Aspiration. When it looks upward, it becomes Faith.{" "}
            </p>
            <p>These words by Stephens S. reflect the ethos of Canara Institution—committed to nurturing talent & skill over the years.</p>
            <p className="pt-12">
              In a world of constant change & global competition, our Management & Staff strive to shape students into balanced individuals—culturally
              refined, emotionally grounded, ethically guided, intellectually alert, socially responsible, spiritually upright & physically strong. We
              pray to the Almighty to give us the strength to enrich the path laid down by our noble Founder in serving the student community at
              large.
            </p>
            <p className="pt-12">
              We pray for the strength to continue walking the path envisioned by our Founder, in service of the student community{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeanMessage;
