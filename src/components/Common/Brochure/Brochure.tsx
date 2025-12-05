"use client";



export default function Brochure({title,description}: {title: string; description: string}) {
 const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdbKHHQ90KSUKhiUqDfNk0FQphvhOAd8gbXIuQvyUeoS5wgwQ/closedform";

  const handleRegister = () => {
    window.open(GOOGLE_FORM_URL, "_blank"); // Opens in new tab
  };
  return (
    <section className="w-full px-5 py-10 md:py-16 bg-[#F5F6FA]">
      <div className="max-w-7xl xl:max-w-[85%] mx-auto flex flex-col items-center ">
<div className="flex justify-between items-center w-full md:mb-10">
        {/* Heading */}
        <div>
        <h1 className="text-[30px] lg:text-[54px] font-bold   text-[#1D1D1F]">
          {title}
        </h1>
        <p className="lg:text-2xl text-base   text-[#1D1D1F]   text-center font-medium ">
          {description}
        </p>

 </div>

        {/* Register Button */}
        <div className="">
          <button onClick={handleRegister}  className="text-white bg-[#3C71D7] hidden lg:block rounded-[90px] px-8 py-3 font-bold">
            Register Now
          </button>
        </div>
</div>
        {/* Flipbook iFrame */}
        <div className="w-full mt-10 flex justify-center">
          <iframe
            src="https://heyzine.com/flip-book/f3ffe5ae15.html"
            className="w-full h-[600px] rounded-md "
            allowFullScreen
          />
        </div>
   <div className="">
          <button onClick={handleRegister} className="text-white bg-[#3C71D7] block lg:hidden mt-10 rounded-[90px] px-8 py-3 font-bold">
            Register Now
          </button>
        </div>
      </div>
     
    </section>
  );
}
