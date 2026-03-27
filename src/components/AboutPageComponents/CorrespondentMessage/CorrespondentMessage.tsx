import Image from "next/image";
import React from "react";
// Make sure to update this path to your actual image file
import image from "../../../../public/images/aboutPageImages/correspondent.webp";

const CorrespondentMessage = () => {
  return (
    <div className="max-w-6xl xl:max-w-[75%] mx-auto  px-5 mt-10 lg:mt-16 ">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-0">
        {/* Image Section */}
       {/* Desktop Image Section */}
<div className="hidden lg:flex lg:col-span-4 flex-col items-center text-center md:text-left">
  <Image src={image} alt="Correspondent" className="object-cover rounded-2xl w-5/6 h-auto" />
  <h2 className="text-[#1D1D1F] text-2xl text-center  pt-6 font-bold">Sri. T Gopalkrishna</h2>
    <h2 className="text-[#1D1D1F] text-2xl text-center   font-bold">Shenoy</h2>
</div>

        {/* Spacer for desktop */}
        <div className="hidden md:block md:col-span-1"></div>

        {/* Message Section */}
        <div className="md:col-span-7 text-center md:text-left">
          <h2 className="text-[#1D1D1F] text-3xl sm:text-[48px] font-bold">Message from the Correspondent</h2>

          {/* Mobile Image Section */}
          <div className="lg:hidden pt-5 flex lg:col-span-4 flex-col items-center text-center md:text-left">
            <Image src={image} alt="Correspondent" className="object-cover rounded-2xl w-full h-auto" />
            <h2 className="text-[#1D1D1F] text-2xl sm:text-[27px] pt-6 font-bold">Sri. T Gopalkrishna Shenoy</h2>
          </div>

          <div className="text-[#2A2A2A] text-justify pt-3 sm:pt-5 text-lg leading-relaxed">
            <p>
              Canara Institutions have been in the forefront of providing Quality education for last more than a century following the guiding principle of our visionary founder, Sri Ammembal Subba Rao Pai which is to provide “Quality Education at Affordable cost”. Canara Pre-University College has been carrying this mission forward for last 5 decades since its inception in 1972 of providing best of education to students pursing the professional fields of their choice both in Science & Commerce Stream. 
            </p>

            <p className="pt-8 sm:pt-3">
              Canara has always been recognised for academic excellence with its students getting Ranks at State Level since its inception & in 50 years of our existence, I can say we have got a rank almost every year on an average. At the same time, we also believe that extra-curricular activities are equally important & have many clubs in areas of literature, music, sports etc for all round development of all our students 
            </p>

            <p className="pt-8 sm:pt-3">
              Canara PU College has got into association with Allen Career Institute to provide in-house guidance & training of IIT-JEE (Mains + Advance)/NEET/ CET entrance exams for aspirants from the Science stream. We also have a inhouse training for our commerce students appearing for CA Foundation exam with more than 50% students passing the exams. 
            </p>

            <p className="pt-8 sm:pt-3">
              Our endeavour is to make our campuses conducive for better learning & a place for overall development of our students. It is our responsibility to see that our students also inculcate good values, character & develop positive attitude so that they are ready to face future challenges in career & life.  
            </p>

            <p className="pt-8 sm:pt-3">
              While we have a wonderful set of teachers to whom we are thankful for maintaining high standard of education by constantly upgrading themselves, our management has been progressive enough to take advice from our illustrious Alumni, Industry leaders to see that Canara is always at the forefront of providing education relevant for the times. Let us all dedicate our efforts to make our institution into a centre of excellence where young minds can grow into confident individuals 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorrespondentMessage;