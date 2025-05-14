import Image from "next/image";
import React from "react";
import image from "../../../../public/Images/aboutPageImages/principal.webp";
const PrincipalMessage = () => {
  return (
    <div className="container grid md:grid-cols-2 grid-cols-1 mx-auto gap-8 mt-44">
      <div className="flex justify-center flex-col items-center">
        <Image src={image} alt="Dean" className="object-cover w-[380px] h-[436px]" />
        <h2 className="text-black text-[27px] pt-9 font-bold">Smt. Latamaheswari K B</h2>
      </div>
      <div>
        <h2 className="text-black text-4xl font-bold">Message from the Principal</h2>
        <div className="text-[#86868B] pt-8">
          <p>
            I am pleased to share my views through these few words. Having spent three decades in this noble profession, I feel blessed that I have
            had the opportunity to serve the society. Life has a series of challenges but the individual should learn the skill of retaining faith,
            have trust, adopt the right attitude and be grateful. This will definitely open new doors. Academic excellence should be complemented by
            extracurricular activities. This enables an individual feel complete.
          </p>
          <p className="pt-12">
            At CANARA we take personal interest in monitoring the academic progress of the students alongside ensuring personality development. We
            consider it our prime duty to groom the students to be successful in life and at the same time we encourage them to develop traits that
            get them the recognition of being a good human being.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrincipalMessage;
