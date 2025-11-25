"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AppleStyledCard from "@/ui/apple-card";
import CardContent from "@/ui/card-content";

interface FacilityCardProps {
  title: string;
  imageUrl: string;
  className?: string;
  gradientColor?: string;
  description: string;
  delay: number;
  index: number;
  subTitle?: string;
  heading?: string;
  subHeading?: string;
  subDescription?: string;
  bottomDescription?: string;
  centering?: string;
  keyHighlights?: string[]; // ✅ Array of strings
  additionalFeatures?: string[]; // ✅ Optional array of strings
  // Used to alternate direction
}

const FacilityCard: React.FC<FacilityCardProps> = ({
  title,
  imageUrl,
  className = "",
  gradientColor,
  delay,
  index,
  description,
  additionalFeatures,
  bottomDescription,
  heading,
  keyHighlights,
  subDescription,
  subHeading,
  subTitle,
  centering,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Alternate direction: even index from left, odd from right
  const direction = index % 2 === 0 ? -50 : 50; // -50 for left, 50 for right

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: direction }} // Start off-screen left or right
      animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : direction }} // Slide to center
      transition={{ duration: 0.5, ease: "easeOut", delay }} // Smooth transition with delay
      className={`relative rounded-2xl overflow-hidden group h-[360px] ${className}`}
    >
      <AppleStyledCard
        imageSrc={imageUrl}
        title={title}
        imageAlt={title}
        key={title}
        gradientColor={gradientColor}
        centering={centering}
        content={
          <CardContent
            imageSrc={imageUrl}
            description={description}
            subTitle={subTitle}
            heading={heading}
            subHeading={subHeading}
            subDescription={subDescription}
            keyHighlights={keyHighlights}
            additionalFeatures={additionalFeatures}
            bottomDescription={bottomDescription}
            backgroundColor=""
            textColor="text-neutral-600"
            headingColor="text-neutral-700"
            title={title}
          />
        }
      />
    </motion.div>
  );
};

function Innovations() {
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: true });

  return (
    <section className="max-w-[90%] xl:max-w-[75%] mx-auto lg:mb-0 mb-10">
      <div className=" relative overflow-hidden text-[#1D1D1F]" ref={sectionRef}>
        <div className="  ">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: isSectionInView ? 1 : 0, y: isSectionInView ? 0 : -50 }}
            transition={{ duration: 0.5 }}
            className=""
          >
            <h1 className="font-bold leading-[1.1] md:text-3xl lg:text-4xl lg2:text-[45px] text-3xl">
              Our Campus
              <br className="hidden lg:block"/>
              Facilities
            </h1>
            <p className="lg2:text-xl lg:text-xl text-[#2A2A2A]  pt-4   mb-6 font-medium  lg:max-w-1/3">
              Well-equipped & student-focused spaces that support learning & everyday campus life.
            </p>
          </motion.div>
          <div className="lg:grid grid-cols-12 gap-4 overflow-hidden hidden relative">
            <FacilityCard
              title="Academic Counsellor"
              description="Every class shall have a member of the teaching staff as the Academic Counsellor who will act as a friend, philosopher & guide to all the students entrusted to his / her personal care."
              imageUrl="/images/homePageImages/1.png"
              className="lg:col-span-3 md:col-span-5 row-span-2 mt-56"
              gradientColor="#3c72d7"
              delay={0.1}
              index={0} // From left
            />
            <FacilityCard
              title="Book Bank"
              description="This scheme is intended primarily to help the economically backward students who cannot afford to purchase expensive text books, to possess the same on loan from the Book Bank for the academic year."
              imageUrl="/images/homePageImages/2.png"
              className="lg:col-span-3 md:col-span-5 row-span-1 top-32"
              gradientColor="#3c72d7"
              delay={0.2}
              index={1} // From right
            />
            <FacilityCard
              title="Scholarships"
              description="All Government & College Scholarships are given to needy and meritorious students."
              imageUrl="/images/homePageImages/1.png"
              className="lg:col-span-3 md:col-span-5 row-span-2"
              gradientColor="#3c72d7"
              delay={0.3}
              index={2} // From left
            />
            <FacilityCard
              title="Communication System"
              description="The College provides easy access to the attendance of the students through the  SMS service to parents. SMS alerts about college notifications are also given to lecturers and parents . The regularly Updated college Website gives a comprehensive view to the college activities."
              imageUrl="/images/homePageImages/4.png"
              className="lg:col-span-3 md:col-span-5 row-span-1 top-20"
              gradientColor="#3c72d7"
              delay={0.4}
              index={3} // From right
            />
            <FacilityCard
              title="Medical Facilities"
              description="All the bonafied students of this institution come under the “Safety Insurance Policy”, The Premium towards the same, is paid by the college from the ‘Parent -Teacher Association’ fund."
              imageUrl="/images/homePageImages/5.png"
              className="lg:col-span-3 md:col-span-5 row-span-2 top-36"
        
              gradientColor="#3c72d7"
              centering="object-[5%_center]"
              delay={0.5}
              index={4} // From left
            />
            <FacilityCard
              title="Remedial Classes"
              description="With the aim of enhancing students’ performance and aiding the slow learners, remedial classes are organised."
              imageUrl="/images/homePageImages/6.png"
              className="lg:col-span-4 md:col-span-5 object-cover lg:max-w-[310px] row-span-2 xl:max-w-[310px] top-[-13rem]"
              gradientColor="#3c72d7"
              delay={0.6}
              index={5} // From right
            />
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 relative lg:hidden">
            <FacilityCard
              title="Academic Counsellor"
              description="Every class shall have a member of the teaching staff as the Academic Counsellor who will act as a friend, philosopher & guide to all the students entrusted to his / her personal care."
              className="col-span-1"
              imageUrl="/images/homePageImages/1.png"
              gradientColor="#3c72d7"
              delay={0.1}
              index={0}
            />
            <FacilityCard
              title="Book Bank"
              description="This scheme is intended primarily to help the economically backward students who cannot afford to purchase expensive text books, to possess the same on loan from the Book Bank for the academic year."
              imageUrl="/images/homePageImages/2.png"
              className="col-span-1"
              gradientColor="#3c72d7"
              delay={0.2}
              index={1}
            />
            <FacilityCard
              title="Scholarships"
              description="All Government & College Scholarships are given to needy and meritorious students."
              imageUrl="/images/homePageImages/1.png"
              className="col-span-1"
              gradientColor="#3c72d7"
              delay={0.3}
              index={2}
            />
            <FacilityCard
              title="Communication System"
              description="The College provides easy access to the attendance of the students through the  SMS service to parents. SMS alerts about college notifications are also given to lecturers and parents . The regularly Updated college Website gives a comprehensive view to the college activities."
              imageUrl="/images/homePageImages/4.png"
              className="col-span-1"
              gradientColor="#3c72d7"
              delay={0.4}
              index={3}
            />
            <FacilityCard
              title="Medical Facilities"
              description="All the bonafied students of this institution come under the “Safety Insurance Policy”, The Premium towards the same, is paid by the college from the ‘Parent -Teacher Association’ fund."
              imageUrl="/images/homePageImages/5.png"
        
              className="col-span-1"
              centering="object-[5%_center]"
              gradientColor="#3c72d7"
              delay={0.5}
              index={4}
            />
            <FacilityCard
              title="Remedial Classes"
              description="With the aim of enhancing students’ performance and aiding the slow learners, remedial classes are organised."
              imageUrl="/images/homePageImages/6.png"
              centering="object-[25%_center]"
              className="col-span-1"
              gradientColor="#3c72d7"
              delay={0.6}
              index={5}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Innovations;
