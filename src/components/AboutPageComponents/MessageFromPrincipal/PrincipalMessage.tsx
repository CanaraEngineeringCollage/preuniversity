import Image from "next/image";
import React from "react";
import image from "../../../../public/images/aboutPageImages/principal.webp";

const PrincipalMessage = () => {
  return (
    <div className="max-w-5xl xl:max-w-[60%] mx-auto my-10 md:my-36 px-5">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-0">
        {/* Image Section */}
        <div className="hidden lg:flex lg:col-span-4 flex-col items-center text-center md:text-left">
          <Image src={image} alt="Principal" className="object-cover rounded-2xl w-full h-[350px] sm:h-[400px] md:h-[436px]" />
          <h2 className="text-[#1D1D1F] text-2xl sm:text-[27px] pt-6 font-bold">Smt. Latamaheswari K B</h2>
        </div>

        {/* Spacer for desktop */}
        <div className="hidden md:block md:col-span-1"></div>

        {/* Message Section */}
        <div className="md:col-span-7 text-center md:text-left">
          <h2 className="text-[#1D1D1F] text-3xl sm:text-[48px] font-bold">Message from the Principal</h2>

          <div className="lg:hidden pt-5 flex lg:col-span-4 flex-col items-center text-center md:text-left">
            <Image src={image} alt="Principal" className="object-cover rounded-2xl w-full h-[350px] sm:h-[400px] md:h-[436px]" />
            <h2 className="text-[#1D1D1F] text-2xl sm:text-[27px] pt-6 font-bold">Smt. Latamaheswari K B</h2>
          </div>

          <div className="text-[#86868B] pt-6 sm:pt-6 text-base sm:text-lg  leading-relaxed">
            <p>
              I am pleased to share my views through these few words. Having spent three decades in this noble profession, I feel blessed that I have
              had the opportunity to serve the society. Life has a series of challenges but the individual should learn the skill of retaining faith,
              have trust, adopt the right attitude and be grateful. This will definitely open new doors. Academic excellence should be complemented by
              extracurricular activities. This enables an individual feel complete.
            </p>

            <p className="pt-8 sm:pt-6">
              At CANARA we take personal interest in monitoring the academic progress of the students alongside ensuring personality development. We
              consider it our prime duty to groom the students to be successful in life and at the same time we encourage them to develop traits that
              get them the recognition of being a good human being.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipalMessage;
