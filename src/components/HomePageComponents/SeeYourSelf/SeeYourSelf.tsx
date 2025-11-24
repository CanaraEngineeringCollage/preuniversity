import Image from "next/image";
import Link from "next/link";
import React from "react";


const SeeYourSelf = () => {
  return (
    <section className="max-w-7xl xl:max-w-[75%] px-5 mx-auto text-[#1D1D1F] my-0 md:my-12">
      <div className="grid grid-cols-1  lg:grid-cols-12 justify-items-center items-center">
        <div className="flex flex-col lg:col-span-7">
          <h1 className="font-bold leading-[1.1] md:text-3xl lg:text-4xl lg2:text-[45px] text-3xl">See Yourself at Canara</h1>
            <div className="flex pt-5 pb-1 lg:hidden items-center justify-center  lg2:p-16 ">
          <Image src="/images/homePageImages/image1.png" alt="" width={1000} height={1000} className=" rounded-2xl" />
        </div>
          <p className="text-[#2A2A2A] text-base text-justify lg:text-xl lg2:pt-8 lg:pt-4 pt-5 ">
            Canara Pre-University College, established in 1972, offers two-year Pre-University education in Commerce (BSBA, BEBA, CSBA, SEBA & HEBA) &
            Science (PCMB, PCMC, PCME, PCMS) streams. With a focus on academic excellence, character building & overall personality development, the
            college nurtures students in a supportive, inclusive environment.
          </p>

          <p className="text-[#2A2A2A] lg2:text-xl text-justify pt-4 lg2:pt-8">
            Located in the heart of the city, the campus features well-equipped labs, a modern library, reading room & canteen. Students are
            encouraged to take part in co-curricular activities, with achievers recognized & celebrated.
          </p>
          <div className="mx-auto lg:mx-0 ">
          <Link href={"/about"}><button className="px-4 py-1.5 border  border-gray-600 rounded-4xl lg:w-1/4 mt-8 hover:bg-gray-500/40 transition">View More</button></Link>
        </div>
        </div>
        <div className="lg:col-span-1 hidden lg:block"></div>
        <div className="lg:flex hidden lg:col-span-4 items-center justify-end md:py-8 lg2:py-16 ">
          <Image src="/images/homePageImages/image1.png" alt="" width={1000} height={1000} className=" rounded-2xl" />
        </div>
      </div>
    </section>
  );
};

export default SeeYourSelf;
