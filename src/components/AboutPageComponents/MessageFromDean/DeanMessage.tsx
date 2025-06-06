import React from "react";
import image from "../../../../public/images/aboutPageImages/dean.webp";
import Image from "next/image";
const DeanMessage = () => {
  return (
    <div className=" max-w-[90%] xl:max-w-[75%]  grid md:grid-cols-2 grid-cols-1 mx-auto gap-8 mt-44">
      <div>
        <h2 className="text-black leading-[1.1] md:text-3xl lg:text-4xl lg2:text-[45px] text-3xl font-bold">Message from the Dean</h2>
        <div className="text-[#86868B] pt-8 flex flex-col lg2:text-xl ">
          <p>Vision, when turned inward, becomes Duty. When it looks outward, it becomes Aspiration. When it looks upward, it becomes Faith.</p>
          <p>These words by Stephens S. reflect the ethos of Canara Institution—committed to nurturing talent & skill over the years.</p>
          <p className="pt-12">
            In a world of constant change & global competition, our Management & Staff strive to shape students into balanced individuals—culturally
            refined, emotionally grounded, ethically guided, intellectually alert, socially responsible, spiritually upright & physically strong.
          </p>
          <p className="pt-12">
            We pray for the strength to continue walking the path envisioned by our Founder, in service of the student community.
          </p>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center">
        <Image src={image} alt="Dean" className="object-cover w-[380px] h-[436px]" />
        <h2 className="text-black text-[27px] font-bold pt-9">Sri. Gopalakrishna </h2>
        <h2 className="text-black text-[27px] font-bold">Shetty K M</h2>
      </div>
    </div>
  );
};

export default DeanMessage;
