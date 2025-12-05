"use client";

export default function FestLocation() {
  return (
    <section className="w-full px-5 pb-16 pt-5 lg:py-16 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 md:gap-10 gap-5 items-center">

        {/* LEFT TEXT SECTION */}
        <div className=" md:col-span-7 space-y-5">
          <h2 className="text-[#1D1D1F] leading-[1.3] md:text-3xl lg:text-4xl lg2:text-[45px] md:mb-10 text-3xl font-bold">
            Be a Part of a Fest <br /> Like No Other
          </h2>

          <div className="text-left hidden md:block text-[#475467] space-y-5">

            <p>
              <span className="font-bold lg:text-lg text-[#2A2A2A]">Venue</span> <br />
             <span className="font-normal lg:text-lg text-[#2A2A2A]">  Canara Pre University College, M G Road, Kodialbail, Mangaluru 575003</span>
            </p>

            <p>
              <span className="font-bold lg:text-lg text-[#2A2A2A]">Fest Timings</span> <br />
              <span className="font-normal lg:text-lg text-[#2A2A2A]"> Day 1: 21 November 2025, 9:00 AM to 4:30 PM <br />
              Day 2: 22 November 2025, 9:00 AM to 4:30 PM</span>
            </p>

            <p>
              <span className="font-bold lg:text-lg text-[#2A2A2A]">Get in Touch:</span>
              <span className="font-normal lg:text-lg text-[#2A2A2A]"> 0824 2496505 | 0824 2492561</span>
            </p>

          </div>
        </div>

        {/* RIGHT GOOGLE MAP IFRAME */}
        <div className="md:col-span-5"   onClick={()=>{
            window.open("https://maps.google.com/maps?q=12.908481990450067,74.8659859558218&z=15&output=embed&hl=en", "_blank");
          }}>
          <iframe
        
            src="https://maps.google.com/maps?q=12.908481990450067,74.8659859558218&z=15&output=embed&hl=en"
            allowFullScreen
            loading="lazy"
            className="w-full h-[320px] md:h-[400px] rounded-3xl "
          ></iframe>
        </div>
  <div className=" md:col-span-7 md:hidden mt-6 space-y-5">
       

          <div className="text-left md:hidden text-[#475467] space-y-5">

            <p>
              <span className="font-bold lg:text-lg text-[#2A2A2A]">Venue</span> <br />
             <span className="font-normal lg:text-lg text-[#2A2A2A]">  Canara Pre University College, M G Road, Kodialbail, Mangaluru 575003</span>
            </p>

            <p>
              <span className="font-bold lg:text-lg text-[#2A2A2A]">Fest Timings</span> <br />
              <span className="font-normal lg:text-lg text-[#2A2A2A]"> Day 1: 21 November 2025, 9:00 AM to 4:30 PM <br />
              Day 2: 22 November 2025, 9:00 AM to 4:30 PM</span>
            </p>

            <p>
              <span className="font-bold lg:text-lg text-[#2A2A2A]">Get in Touch:</span>
              <span className="font-normal lg:text-lg text-[#2A2A2A]"> 0824 2496505 | 0824 2492561</span>
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
