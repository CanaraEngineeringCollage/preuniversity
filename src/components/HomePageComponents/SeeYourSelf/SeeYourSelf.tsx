import Image from "next/image";
import React from "react";

const SeeYourSelf = () => {
  return (
    <section className="max-w-[90%] xl:max-w-[75%] mx-auto text-black my-0 md:my-12">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 justify-items-center items-center">
        <div className="flex flex-col">
          <h1 className="font-bold leading-[1.1] md:text-3xl lg:text-4xl lg2:text-[45px] text-3xl">See Yourself at Canara</h1>
          <p className="text-[#86868B]  lg2:text-xl lg2:pt-8 pt-4 ">
            Canara Pre-University College, established in 1972, offers two-year Pre-University education in Commerce (BSBA, BEBA, CSBA, SEBA & HEBA) &
            Science (PCMB, PCMC, PCME, PCMS) streams. With a focus on academic excellence, character building & overall personality development, the
            college nurtures students in a supportive, inclusive environment.
          </p>

          <p className="text-[#86868B] lg2:text-xl pt-4 lg2:pt-8">
            Located in the heart of the city, the campus features well-equipped labs, a modern library, reading room & canteen. Students are
            encouraged to take part in co-curricular activities, with achievers recognized & celebrated.
          </p>
          <button className="px-4 py-1.5 border rounded-4xl lg:w-1/4 mt-4 lg2:mt-8">View More</button>
        </div>
        <div className="flex items-center justify-center md:p-8 lg2:p-16 ">
          <Image src="/images/homePageImages/image1.png" alt="" width={1000} height={1000} className=" rounded-2xl" />
        </div>
      </div>
    </section>
  );
};

export default SeeYourSelf;
