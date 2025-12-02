import Image from "next/image";
import { motion } from "framer-motion";

const data = [
  {
    image: "/images/homePageImages/1.png",
    text: "Academic Counselling",
    description: "Interactive learning environment",
  },
  {
    image: "/images/homePageImages/2.png",
    text: "Book Bank",
    description: "Hands-on practical sessions",
  },
  {
    image: "/images/homePageImages/5.png",
    text: "Medical Facilities",
    description: "Advanced course experiments",
  },
  {
    image: "/images/homePageImages/3.png",
    text: "Dedicated Course Labs",
    description: "Interactive learning environment",
  },
  {
    image: "/images/homePageImages/6.png",
    text: "Competitive Exam Training",
    description: "Hands-on practical sessions",
  },
  {
    image: "/images/homePageImages/4.png",
    text: "Club Activities",
    description: "Advanced course experiments",
  },
  {
    image: "/images/homePageImages/1.png",
    text: "Scholarships",
    description: "Advanced course experiments",
  },
];

export default function Card() {
  const gradientColor = "#3d6cbe"; // Define gradient color (customize as needed)

  return (
    <section className="my-10 lg:my-16 xl:my-32">
            <h1 className="leading-[1.1] md:text-3xl text-[#1D1D1F] lg:text-4xl lg2:text-5xl leading-[1.4] text-3xl font-bold pt-0 lg:pt-0 pb-5 lg:pb-12 text-center">Infrastructure at <br className="md:hidden"/> Canara PU College</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        
        {data.map((item, index) => (
       <div
  key={index}
  className={`relative w-full rounded-xl overflow-hidden shadow-lg ${
    index === data.length - 1 ? "md:col-start-2" : ""
  }`}
>

            <Image
              src={item.image}
              alt={item.text}
              width={400}
              height={300}
              className="w-full h-[50vh] object-cover"
            />
            <div
              className="absolute top-[70%] h-[30%] inset-x-0 z-[100] pointer-events-none"
              style={{
                backgroundImage: `linear-gradient(to top, ${gradientColor}, transparent)`,
              }}
            />
            <div className="absolute bottom-0  left-0 w-full h-20 flex items-center justify-center">
<button className="text-white !cursor-auto min-w-[250px] py-3 rounded-4xl border text-[16px] font-bold z-[101]">
  {item.text}
</button>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}