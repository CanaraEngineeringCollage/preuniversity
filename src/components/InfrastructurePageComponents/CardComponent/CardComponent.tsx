"use client";

import Image from "next/image";
import { useState } from "react";
import Modal from "./Modal/Modal";
import FacilitiesCardContent from "./FacilitiesCard/FacilitiesCard";


const data = [
  {
    image: "/images/homePageImages/1.png",
    text: "Academic Counselling",
    description: "Every class shall have a member of the teaching staff as the Academic Counsellor who will act as a friend, philosopher & guide to all the students entrusted to his / her personal care.",
  },
  {
    image: "/images/homePageImages/2.png",
    text: "Book Bank",
    description: "This scheme is intended primarily to help the economically backward students who cannot afford to purchase expensive text books, to possess the same on loan from the Book Bank for the academic year.",
  },
  {
    image: "/images/homePageImages/5.png",
    text: "Medical Facilities",
    description: "All the bonafied students of this institution come under the “Safety Insurance Policy”, The Premium towards the same, is paid by the college from the ‘Parent-Teacher Association’ fund.",
  },
  {
    image: "/images/homePageImages/3.png",
    text: "Dedicated Course Labs",
    description: "",
  },
  {
    image: "/images/homePageImages/6.png",
    text: "Competitive Exam Training",
    description: "",
  },
  {
    image: "/images/homePageImages/4.png",
    text: "Club Activities",
    description: "",
  },
  {
    image: "/images/homePageImages/1.png",
    text: "Scholarships",
    description: "All Government & College Scholarships are given to needy and meritorious students.",
  },
  {
    image: "/images/homePageImages/6.png",
    text: "Remedial classes",
    description: "With the aim of enhancing students’ performance and aiding the slow learners, remedial classes are organised.",
  },
  {
    image: "/images/homePageImages/1.png",
    text: "Real-Time Student Updates for Parents",
    description: "",
  },
];

export default function FacilitiesSection() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<any>(null);

  const openModal = (item: any) => {
    setSelected(item);
    setOpen(true);
  };

  return (
    <section className="my-10 lg:my-16 xl:my-32">
      <h1 className="leading-[1.1] text-3xl md:text-3xl lg:text-4xl lg2:text-5xl font-bold text-center pb-12 text-[#1D1D1F]">
        Facilities at <br className="md:hidden" /> Canara PU College
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
        {data.map((item, index) => (
          <div
            key={index}
            onClick={() => openModal(item)}
            className="relative w-full rounded-xl overflow-hidden shadow-lg cursor-pointer"
          >
            <Image
              src={item.image}
              alt={item.text}
              width={400}
              height={300}
              className="w-full h-[50vh] object-[center_20%] object-cover"
            />

            <div
              className="absolute top-[70%] h-[30%] inset-x-0 z-[100] pointer-events-none"
              style={{
                backgroundImage: "linear-gradient(to top, #3d6cbe, transparent)",
              }}
            />

            <div className="absolute bottom-0 left-0 w-full h-20 flex items-center justify-center">
              <button className="text-white !cursor-auto min-w-[90%] py-3 rounded-4xl border text-[16px] font-bold z-[101]">
                {item.text}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      <Modal open={open} onClose={() => setOpen(false)}>
        {selected && (
          <FacilitiesCardContent
            title={selected.text}
            description={selected.description}
            imageSrc={selected.image}
            imageAlt={selected.text}
          />
        )}
      </Modal>
    </section>
  );
}
