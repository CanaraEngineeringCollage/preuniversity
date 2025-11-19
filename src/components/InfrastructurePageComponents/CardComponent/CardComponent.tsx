import Image from "next/image";
import { motion } from "framer-motion";

const data = [
  {
    image: "/images/homePageImages/phy2.webp",
    text: "Academic Counselling",
    description: "Interactive learning environment",
  },
  {
    image: "/images/homePageImages/chem1.webp",
    text: "Book Bank",
    description: "Hands-on practical sessions",
  },
  {
    image: "/images/homePageImages/comp2.webp",
    text: "Medical Facilities",
    description: "Advanced course experiments",
  },
  {
    image: "/images/homePageImages/electo1.webp",
    text: "Dedicated Course Labs",
    description: "Interactive learning environment",
  },
  {
    image: "/images/homePageImages/bio1.webp",
    text: "Competitive Exam Training",
    description: "Hands-on practical sessions",
  },
  {
    image: "/images/homePageImages/electo2.webp",
    text: "Club Activities",
    description: "Advanced course experiments",
  },
];

export default function Card() {
  const gradientColor = "#3d6cbe"; // Define gradient color (customize as needed)

  return (
    <section className="my-10 lg:my-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative w-full rounded-xl overflow-hidden shadow-lg"
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
            <div className="absolute bottom-0 left-0 w-full h-20 flex items-center justify-center">
              <button className="text-white px-4 py-1.5 rounded-4xl border text-[16px] font-bold z-[101]">{item.text}</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}