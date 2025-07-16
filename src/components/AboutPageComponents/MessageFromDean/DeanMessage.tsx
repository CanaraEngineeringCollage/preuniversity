import React from "react";
import image from "../../../../public/images/aboutPageImages/dean.webp";
import Image from "next/image";
const DeanMessage = () => {
  return (
    <div className=" max-w-[90%] xl:max-w-[75%]  grid md:grid-cols-2 grid-cols-1 mx-auto gap-8 mt-44">
      <div>
        <h2 className="text-black leading-[1.1] md:text-3xl lg:text-4xl lg2:text-[45px] text-3xl font-bold">Message from the Dean</h2>
        <div className="text-[#86868B] pt-8 flex flex-col lg2:text-xl ">
          <p className="pt-4">Vision, when turned inward, becomes Duty. When it looks outward, it becomes Aspiration. When it looks upward, it becomes Faith.</p>
          {/* <p>These words by Stephens S. reflect the ethos of Canara Institution—committed to nurturing talent & skill over the years.</p> */}
          <p>These words of Stephens S, wise echoes the sentiments and commitment of Canara Institution which over the years has become the showcase of talent and skill.</p>
          {/* <p className="pt-12">
            In a world of constant change & global competition, our Management & Staff strive to shape students into balanced individuals—culturally
            refined, emotionally grounded, ethically guided, intellectually alert, socially responsible, spiritually upright & physically strong.
          </p> */}

          <p className="pt-12">The world today, unlike the past, is ever changing, distance is dying and barriers are becoming thin and nonexistent. Even in the field of education there exists global competition. In such a scenario the Management and Staff of our institution have tried to develop balanced personalities of the students who are culturally refined, emotionally stable, ethically oriented, intellectually alert, socially responsible, spiritually upright and physically strong.

We pray to the Almighty to give us the strength to enrich the path laid down by our noble Founder in serving the student community at large.</p>
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
