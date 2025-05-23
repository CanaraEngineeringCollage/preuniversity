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
    <div className="min-h-screen relative overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl lg:mx-auto xl:mx-auto mx-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: isSectionInView ? 1 : 0, y: isSectionInView ? 0 : -50 }}
          transition={{ duration: 0.5 }}
          className="md:my-24 my-16"
        >
          <h1 className="xl:text-[2.5rem] lg:leading-[1.1] md:text-[2.5rem] text-[1.5rem]  lg:text-[54px] md:leading-10 leading-7 font-bold text-gray-900 mb-4">
            Our Campus 
            <br />
            Facilities
          </h1>
          <p className="text-gray-600 lg:max-w-1/3">Well-equipped & student-focused spaces that support learning & everyday campus life.</p>
        </motion.div>
        <div className="lg:grid grid-cols-12 gap-4 hidden relative">
          <FacilityCard
            title="Academic Counselling"
            description="Our state-of-the-art Academic Block is designed to elevate the learning experience. Spread across three floors, it houses spacious, well-lit classrooms, modern laboratories, and dedicated staff rooms. With lift access to all floors, the block ensures convenience and accessibility for all. A perfect blend of functionality and comfort for both students and faculty."
            imageUrl="/images/homePageImages/1.png"
            className="lg:col-span-3 md:col-span-5 row-span-2 mt-56"
            gradientColor="#3c72d0"
            delay={0.1}
            index={0} // From left
          />
          <FacilityCard
            title="Book Bank"
            description="At Manipal School, we believe that a healthy body nurtures a healthy mind. Our state-of-the-art sports infrastructure(Marena) is designed to meet the diverse physical training needs of our students. With dedicated spaces for cricket, basketball, football, and badminton, we provide ample opportunities for students to engage in sports under the guidance of experienced coachesTo support overall well-being, we incorporate yoga into our curriculum, fostering mindfulness and inner balance. Additionally, Karate training is offered to instill discipline, confidence, and self-defense skills, promoting both physical and mental resilience. Our structured sports program for Junior school students, curated by our training partner Edusports, ensures that every student develops essential athletic skills and gains exposure to various sports. "
            subTitle=""
            heading="Inaugurated and Blessed by"
            subHeading="Shrimad Samyamindra Thirtha Swamiji, Mathadipathi, Shree Kashi Math Samsthan, Varanasi"
            subDescription="A symbol of excellence and grandeur, the auditorium stands as a proud landmark on campus. Designed to host large-scale events, academic gatherings, and cultural programs, it reflects our commitment to providing world-class infrastructure."
            keyHighlights={[
              "Seating Capacity: 2,000",
              "Centrally Air-conditioned Environment",
              "Expansive 2,900 sq.m Carpet Area",
              "State-of-the-Art Acoustics",
              "Uninterrupted Generator Power Supply",
              "Ample Parking Facility",
            ]}
            additionalFeatures={[
              "A/C Seminar Hall with 500-seat capacity, fully equipped with acoustics",
              "Dedicated space for Start-up & Incubation Centre",
            ]}
            bottomDescription="A space built to inspire, connect, and celebrate — all under one roof."
            imageUrl="/images/homePageImages/2.png"
            className="lg:col-span-3 md:col-span-5 row-span-1 top-32"
            gradientColor="#3c72d0"
            delay={0.2}
            index={1} // From right
          />
          <FacilityCard
            title="Dedicated Course Labs"
            keyHighlights={[
              "Dedicated labs for AI & ML, IoT, CAED, CS and more",
              "Centrally Air-conditioned Environment",
              "Guided by experienced faculty and domain experts",
              "Supports academic projects, funded research, and interdisciplinary collaboration",
              "Open for student innovation, startup prototyping, and technical skill development",
            ]}
            bottomDescription="From ideation to real-world solutions, our labs empower you to turn ideas into impact."
            description="Our state-of-the-art Dedicated Course Labs are at the heart of academic discovery and innovation on campus. Designed to foster curiosity and creativity, these labs provide the perfect environment for students and faculty to explore, experiment, and excel."
            imageUrl="/images/homePageImages/3.png"
            className="lg:col-span-3 md:col-span-5 row-span-2"
            gradientColor="#3c72d0"
            delay={0.3}
            index={2} // From left
          />
          <FacilityCard
            title="Club Activities"
            subTitle="Every classroom is a space where ideas thrive and interactions spark innovation"
            description="Our classrooms are spacious, well-lit, and ergonomically designed to provide an ideal learning environment. Equipped with modern teaching aids such as projectors, smart boards, and high-speed internet, they ensure seamless integration of technology into everyday learning."
            imageUrl="/images/homePageImages/4.png"
            className="lg:col-span-3 md:col-span-5 row-span-1 top-20"
            gradientColor="#3c72d0"
            delay={0.4}
            index={3} // From right
          />
          <FacilityCard
            title="Medical Facilities"
            description="47,000 volumes with 5,000+ unique titles, including physical and digital formats. Access to a wealth of e-books, e-journals, and educational videos through our VTUCN membership and digital subscriptions. Over 400+ e-magazines, 10,888 educational videos, and 90+ web content platforms. Access to 200+ international proceedings and 5 lakh+ educational materials through the National Digital Library. Subscriptions to 42 print journals, 16+ magazines, and 4 newspapers."
            imageUrl="/images/homePageImages/5.png"
            className="lg:col-span-3 md:col-span-5 row-span-2 top-36"
            keyHighlights={[
              "47,000 volumes with 5,000+ unique titles in both physical and digital formats.",
              "Access to a diverse collection of e-books, e-journals, and educational videos through our VTUCN membership and digital subscriptions.",
              "Over 400+ e-magazines, 10,888 educational videos, and access to 90+ web content platforms.",
              "Connectivity to 200+ international proceedings and a vast repository of 5 lakh+ educational materials through the National Digital Library.",
              "Subscriptions to 42 print journals, 16+ magazines, and 4 newspapers, enriching academic resources for students.",
            ]}
            gradientColor="#3c72d0"
            centering="object-[5%_center]"
            delay={0.5}
            index={4} // From left
          />
          <FacilityCard
            title="Competitive Exam Training"
            description="We are committed to equipping our students with the knowledge and guidance needed to make informed decisions about their future. Through university fairs, career counseling sessions, and interactions with esteemed academicians, we provide students with valuable insights into higher education opportunities. College visits, workshops, Job shadowing program and mentorship programs help them explore diverse career paths, empowering them to make confident choices for their academic and professional journeys."
            imageUrl="/images/homePageImages/6.png"
            className="lg:col-span-4 md:col-span-5 object-cover lg:max-w-[310px] row-span-2 xl:max-w-[310px] top-[-13rem]"
            gradientColor="#3c72d0"
            delay={0.6}
            index={5} // From right
          />
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 relative lg:hidden">
          <FacilityCard
            title="Academic Counselling"
            description="Our state-of-the-art Academic Block is designed to elevate the learning experience. Spread across three floors, it houses spacious, well-lit classrooms, modern laboratories, and dedicated staff rooms. With lift access to all floors, the block ensures convenience and accessibility for all. A perfect blend of functionality and comfort for both students and faculty."
            className="col-span-1"
            imageUrl="/images/homePageImages/1.png"
            gradientColor="#3c72d0"
          />
          <FacilityCard
            title="Book Bank"
            description="At Manipal School, we believe that a healthy body nurtures a healthy mind. Our state-of-the-art sports infrastructure(Marena) is designed to meet the diverse physical training needs of our students. With dedicated spaces for cricket, basketball, football, and badminton, we provide ample opportunities for students to engage in sports under the guidance of experienced coachesTo support overall well-being, we incorporate yoga into our curriculum, fostering mindfulness and inner balance. Additionally, Karate training is offered to instill discipline, confidence, and self-defense skills, promoting both physical and mental resilience. Our structured sports program for Junior school students, curated by our training partner Edusports, ensures that every student develops essential athletic skills and gains exposure to various sports. "
            subTitle=""
            heading="Inaugurated and Blessed by"
            subHeading="Shrimad Samyamindra Thirtha Swamiji, Mathadipathi, Shree Kashi Math Samsthan, Varanasi"
            subDescription="A symbol of excellence and grandeur, the auditorium stands as a proud landmark on campus. Designed to host large-scale events, academic gatherings, and cultural programs, it reflects our commitment to providing world-class infrastructure."
            keyHighlights={[
              "Seating Capacity: 2,000",
              "Centrally Air-conditioned Environment",
              "Expansive 2,900 sq.m Carpet Area",
              "State-of-the-Art Acoustics",
              "Uninterrupted Generator Power Supply",
              "Ample Parking Facility",
            ]}
            additionalFeatures={[
              "A/C Seminar Hall with 500-seat capacity, fully equipped with acoustics",
              "Dedicated space for Start-up & Incubation Centre",
            ]}
            bottomDescription="A space built to inspire, connect, and celebrate — all under one roof."
            imageUrl="/images/homePageImages/2.png"
            className="col-span-1"
            gradientColor="#3c72d0"
            delay={0.2}
            index={1}
          />
          <FacilityCard
            title="Dedicated Course Labs"
            keyHighlights={[
              "Dedicated labs for AI & ML, IoT, CAED, CS and more",
              "Centrally Air-conditioned Environment",
              "Guided by experienced faculty and domain experts",
              "Supports academic projects, funded research, and interdisciplinary collaboration",
              "Open for student innovation, startup prototyping, and technical skill development",
            ]}
            bottomDescription="From ideation to real-world solutions, our labs empower you to turn ideas into impact."
            description="Our state-of-the-art Dedicated Course Labs are at the heart of academic discovery and innovation on campus. Designed to foster curiosity and creativity, these labs provide the perfect environment for students and faculty to explore, experiment, and excel."
            imageUrl="/images/homePageImages/3.png"
            className="col-span-1"
            gradientColor="#3c72d0"
            delay={0.3}
            index={2}
          />
          <FacilityCard
            title="Club Activities"
            bottomDescription="Every classroom is a space where ideas thrive and interactions spark innovation"
            description="Our classrooms are spacious, well-lit, and ergonomically designed to provide an ideal learning environment. Equipped with modern teaching aids such as projectors, smart boards, and high-speed internet, they ensure seamless integration of technology into everyday learning."
            imageUrl="/images/homePageImages/4.png"
            className="col-span-1"
            gradientColor="#3c72d0"
            delay={0.4}
            index={3}
          />
          <FacilityCard
            title="Medical Facilities"
            description="47,000 volumes with 5,000+ unique titles, including physical and digital formats. Access to a wealth of e-books, e-journals, and educational videos through our VTUCN membership and digital subscriptions. Over 400+ e-magazines, 10,888 educational videos, and 90+ web content platforms. Access to 200+ international proceedings and 5 lakh+ educational materials through the National Digital Library. Subscriptions to 42 print journals, 16+ magazines, and 4 newspapers."
            imageUrl="/images/homePageImages/5.png"
            keyHighlights={[
              "47,000 volumes with 5,000+ unique titles in both physical and digital formats.",
              "Access to a diverse collection of e-books, e-journals, and educational videos through our VTUCN membership and digital subscriptions.",
              "Over 400+ e-magazines, 10,888 educational videos, and access to 90+ web content platforms.",
              "Connectivity to 200+ international proceedings and a vast repository of 5 lakh+ educational materials through the National Digital Library.",
              "Subscriptions to 42 print journals, 16+ magazines, and 4 newspapers, enriching academic resources for students.",
            ]}
            className="col-span-1"
            centering="object-[5%_center]"
            gradientColor="#3c72d0"
            delay={0.5}
            index={4}
          />
          <FacilityCard
            title="On-Campus Dining"
            description="A student-friendly space to relax, recharge, and relish.
Our hygienic and spacious canteens offer a wide variety of vegetarian and non-vegetarian options, catering to diverse tastes. Nutritious and freshly prepared meals are sourced from Prathignhya Café and Can Café - Hangyo, ensuring quality with every bite. It's more than just a meal—it's part of the Canara experience.
"
            imageUrl="/images/homePageImages/6.png"
            centering="object-[25%_center]"
            className="col-span-1"
            gradientColor="#3c72d0"
            delay={0.6}
            index={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Innovations;
