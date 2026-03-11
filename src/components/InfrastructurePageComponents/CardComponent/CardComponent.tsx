"use client";

import Image from "next/image";
import { useState } from "react";
import Modal from "./Modal/Modal";
import FacilitiesCardContent, { FeatureItem } from "./FacilitiesCard/FacilitiesCard";

const data = [
  {
    image: "/images/homePageImages/1.png",
    title: "Academic Counselling",
    intro:
      "At Canara Pre-University College, Academic Counselling plays a vital role in guiding students towards informed and meaningful educational choices. Our counselling services are designed to help every learner understand their strengths, set clear academic goals, and shape a pathway that supports their future aspirations.",
      pointsHeading:"Our experienced counsellors provide individual and group sessions that assist students in:",
    points: [
      "Selecting the right subject combinations based on interest and aptitude",
      "Developing effective study habits and time-management skills",
      "Overcoming academic challenges with personalised support",
      "Preparing for competitive examinations and higher education options",
      "Building confidence and staying motivated throughout their academic journey.",
    ],
    closing:
      "We believe that timely guidance can make a significant difference in a student’s performance and overall growth. Through our structured counselling programme, we ensure that every student receives the support they need to excel academically and make well-informed decisions about their future. ",
      closingEnd:"At Canara P.U. College, we are committed to nurturing learners with clarity, direction, and confidence.",
  },
  {
    image: "/images/homePageImages/2.png",
    title: "Book Bank",
    intro:
      "The Book Bank facility at Canara Pre-University College is designed to support students by providing easy access to essential academic resources throughout the academic year. This initiative ensures that every learner, irrespective of financial background, has the opportunity to study with the required textbooks and reference materials.",
      pointsHeading:"Our Book Bank offers:",
    points: [
      "A wide collection of textbooks across all subject streams",
      "Long-term issue of books, enabling students to retain them for an entire term or academic year",
      "Priority access for deserving and economically disadvantaged students",
      "Well-maintained and updated editions to support effective learning.",
    ],
    closing:
      "The facility helps reduce the financial burden on families while promoting a culture of consistent reading and responsible usage of resources. Students can borrow books through a simple, student-friendly process managed by our library team. ",
      closingEnd:"At Canara P.U. College, the Book Bank stands as a testament to our commitment to inclusivity and academic support, ensuring that every student has the tools they need to succeed.",
  },
  {
    image: "/images/homePageImages/5.png",
    title: "Medical Facilities",
    intro:
      "Canara Pre-University College prioritises the health, safety, and well-being of its students. The college provides basic medical facilities on campus to ensure prompt care and assistance during medical emergencies and health-related concerns. ",
      pointsHeading:"Our Medical Facilities include:",
    points: [
      "First-aid services for immediate care",
      "Qualified medical assistance on call",
      "Health check-ups and awareness programmes",
      "Emergency support and referral to nearby hospitals when required.",
    ],
    closing:
      "The institution maintains a safe and supportive environment where students’ physical well-being is given utmost importance. Parents and students can be assured that necessary medical support is readily available during college hours. ",
      closingEnd:"At Canara P.U. College, student health is considered an essential part of overall development and academic success.",
  },
  {
    image: "/images/homePageImages/6.png",
    title: "Competitive Exam Training",
    intro:
      "Canara Pre-University College is committed to preparing students for success beyond the classroom. To support their aspirations for professional courses and higher education, we offer specialised training programmes for major competitive examinations such as NEET, JEE, KCET, CA Foundation, and other entrance tests. Our competitive exam coaching focuses on building strong subject foundations, developing problem-solving abilities, and enhancing exam-oriented skills through well-structured teaching methods.",
    // Using detailedFeatures to separate the Heading from Description
    keyFeaturesHeading: "Key Features of Our Training Programme",
    detailedFeatures: [
      { title: "Expert Faculty", description: "Experienced teachers and subject specialists who guide students with concept clarity and exam strategies." },
      { title: "Structured Study Plan", description: "Systematic schedules covering the entire syllabus with ample time for revision." },
      { title: "Comprehensive Study Material", description: "Well-prepared notes, question banks, and model papers tailored to each exam." },
      { title: "Regular Tests & Assessments", description: "Weekly/Monthly tests, mock examinations, and performance analysis to track progress." },
      { title: "Doubt-Clearing Sessions", description: "Dedicated time for personalised attention to ensure every student overcomes academic challenges." },
      { title: "Career Guidance & Counselling", description: "Support for selecting the right career paths based on aptitude, interest, and performance." },
    ],
    extraHeading: "Exams Covered",
    extra: [
      "NEET – For aspiring medical professionals",
      "JEE (Main/Advanced) – For engineering aspirants",
      "KCET – For admissions to professional courses in Karnataka",
      "CA Foundation – For students aiming for a career in Chartered Accountancy",
      "CLAT – Focused CLAT guidance with expert mentoring to build legal aptitude, reasoning skills, and exam confidence",
      "Other national and state-level entrance examinations.",
    ],
    closing:
      "Our objective is to empower students with knowledge, confidence, and exam-readiness, helping them secure admission to reputed institutions and build promising careers. ",
    closingEnd:"At Canara P.U. College, we strive to create an environment where every learner is equipped to achieve excellence in competitive examinations. "
  },
  {
    image: "/images/homePageImages/6.png",
    title: "Remedial Classes",
    intro:
      "At Canara Pre-University College, we believe that every student has the potential to succeed when given the right support and guidance. Our Remedial Classes are designed to help learners strengthen their understanding of subjects, bridge learning gaps, and build the confidence needed to perform well academically. ",
      pointsHeading:"These classes provide personalised academic support for students who require additional assistance beyond regular classroom teaching.",
      keyFeaturesHeading: "Key Features of Remedial Classes",
    detailedFeatures: [
      { title: "Focused Attention", description: "Small-group or one-on-one sessions that address individual learning needs." },
      { title: "Concept Reinforcement", description: "Revision of fundamental concepts to ensure strong subject foundations." },
      { title: "Skill Development", description: "Guidance in study skills, problem-solving techniques, and time management." },
      { title: "Additional Practice", description: "Extra worksheets, assignments, and practice tests to improve performance." },
      { title: "Continuous Monitoring", description: "Regular assessment and feedback to track progress and identify areas for improvement." },
      { title: "Supportive Learning Environment", description: "Encouragement and motivation to help students overcome academic challenges." },
    ],
    closing:
      "Our dedicated faculty ensures that students receive the support they need to move at a comfortable pace and achieve academic success. Remedial Classes reflect our commitment to inclusivity and to helping every learner reach their full potential. ",
      closingEnd:"At Canara P.U. College, we stand by our students at every step of their learning journey."
  },
  {
    image: "/images/homePageImages/3.png",
    title: "Dedicated Course Labs",
    intro:
      "Canara Pre-University College provides well-equipped, subject-specific laboratories that support experiential learning and practical application of theoretical concepts. Our dedicated labs are designed to meet academic requirements while encouraging curiosity, experimentation, and scientific thinking among students.",
    detailedFeatures: [
      { title: "Physics Laboratory", description: "The Physics Lab is equipped with modern instruments and apparatus to help students understand fundamental principles through hands-on experimentation. Practical sessions enhance conceptual clarity in areas such as mechanics, optics, electricity, and magnetism under the guidance of experienced faculty." },
      { title: "Chemistry Laboratory", description: "Our Chemistry Lab offers a safe and well-ventilated environment with adequate workstations and essential equipment. Students perform experiments in organic, inorganic, and physical chemistry, gaining practical skills while adhering to strict safety protocols." },
      { title: "Biology Laboratory", description: "The Biology Lab provides facilities for studying botany and zoology through microscopes, models, charts, and specimens. Practical work enables students to observe, analyse, and understand biological structures and processes effectively." },
      { title: "Computer Science Laboratory", description: "The Computer Science Lab is equipped with updated systems and software to support programming, data handling, and practical computing skills. It enables students to apply theoretical knowledge in areas such as coding, algorithms, and information technology." },
      { title: "Electronics Laboratory", description: "The Electronics Lab offers hands-on exposure to electronic components, circuits, and devices. Students learn the fundamentals of electronics through practical experiments that strengthen analytical and technical skills." },
    ],
    closing:
      "Through these dedicated laboratories, Canara P.U. College ensures a balanced blend of theory and practice, preparing students for higher education and future careers in science and technology.",
  },
  {
    image: "/images/homePageImages/4.png",
    title: "Club Activities",
    intro:
      "At Canara Pre-University College, club activities play a vital role in the holistic development of students. Our wide range of clubs provide platforms for creativity, leadership, teamwork, and intellectual growth beyond academics. These clubs encourage students to explore their interests, develop skills, and express their talents in a supportive and engaging environment.",
    detailedFeatures: [
      { title: "Interact Club", description: "Promotes social responsibility and leadership through community service, awareness programmes, and humanitarian initiatives" },
      { title: "Cultural Club", description: "Encourages participation in cultural events, festivals, and celebrations, nurturing appreciation for art, tradition, and diversity" },
      { title: "Extracurricular Activities", description: "Provides opportunities for students to engage in competitions and skill-based activities that enhance confidence and teamwork" },
      { title: "Literary Club", description: "Develops reading, writing, and communication skills through debates, creative writing, poetry, and language-based activities" },
      { title: "Quiz Club", description: "Enhances general knowledge, critical thinking, and quick decision-making through inter-class and inter-college quiz competitions" },
      { title: "Music Club", description: "Nurtures musical talent by encouraging vocal and instrumental performances, practice sessions, and cultural programmes" },
      { title: "Can Vision", description: "It is a vibrant platform that reflects the creativity, achievements, and skills of our students and faculty. It serves as a mirror of campus life, capturing academic excellence, cultural diversity, and the dynamic spirit of the institution" },
      { title: "Ladies Club", description: "Empowers girl students through awareness programmes, health education, life skills, and confidence-building activities" },
      { title: "Science Club", description: "Stimulates scientific curiosity through experiments, exhibitions, projects, and innovation-oriented activities" },
      { title: "Commerce Club", description: "Provides insights into commerce, business, finance, and economics through seminars, discussions, and practical exposure" },
      { title: "Eco Club", description: "Promotes environmental awareness, sustainability practices, tree plantation drives, and eco-friendly initiatives" },
      { title: "Photography Club", description: "Encourages creative expression through photography, visual storytelling, exhibitions, and technical skill development" },
      { title: "Dramatics Club", description: "Develops acting, stage confidence, and teamwork through theatre, skits, mime, and dramatics performances" },
      { title: "Astronomy Club", description: "Creates interest in space science through sky observations, discussions, presentations, and scientific exploration" },
      { title: "Art Club", description: "Fosters creativity through drawing, painting, craftwork, and art exhibitions" },
      { title: "Debate Club", description: "Enhances logical thinking, public speaking, and communication skills through structured debates and discussions" },
      { title: "Mathematics Club", description: "Promotes analytical thinking and problem-solving skills through puzzles, activities, and math-based competitions" },
      { title: "IT Club", description: "Develops digital literacy, programming skills, and technological awareness through hands-on activities and workshops" },
      { title: "Olympiad Training", description: "Prepares students for national and international Olympiad examinations, strengthening subject knowledge and competitive skills." },
    ],
    closing:
      "Through these diverse club activities, Canara Pre-University College ensures the all-round development of students, helping them become confident, skilled, and socially responsible individuals.",
  },
  {
    image: "/images/homePageImages/1.png",
    title: "Scholarships",
    intro:
      "Canara Pre-University College is committed to promoting inclusive education by supporting students through a variety of scholarship schemes. These scholarships are designed to encourage academic excellence, support meritorious students, and assist those from economically disadvantaged backgrounds. ",
      pointsHeading:"Our institution facilitates and guides students in availing government, institutional, and private scholarships, ensuring that financial constraints do not hinder academic progress. Types of Scholarships Available:",
      extraHeading:"Types of Scholarships Available",
    extra: [
      "Merit-Based Scholarships for students with outstanding academic performance",
      "Need-Based Scholarships for students from economically weaker sections",
      "Government Scholarships offered by State and Central Governments",
      "Minority Scholarships for eligible students as per government norms",
      "Sports & Co-curricular Scholarships for students with exceptional achievements",
      "Institutional Support & Fee Concessions for deserving students.",
    ],
    closing:
      "Through these initiatives, Canara P.U. College ensures equal opportunities for all learners, enabling them to pursue education with confidence and focus on academic excellence.",
  },
  {
    image: "/images/homePageImages/1.png",
    title: "Real-Time Student Updates for Parents",
    intro: "We ensure parents are kept in the loop regarding their child's progress and safety through consistent communication channels.",
    points: [
      "Attendance / Absenteeism details of students are sent to parents on quarterly and daily basis respectively",
      "After each test / exam parent – teacher interaction is arranged to update the parents about their ward’s academic performance",
      "Personal call is made to parents of students who have missed class for more than three continuous days",
    ],
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
            className="relative w-full rounded-xl overflow-hidden shadow-lg cursor-pointer transition-transform hover:scale-[1.02]"
          >
            <Image
              src={item.image}
              alt={item.title}
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
                {item.title}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      <Modal open={open} onClose={() => setOpen(false)}>
        {selected && (
          <FacilitiesCardContent
        closingEnd={selected.closingEnd}
            keyFeaturesHeading={selected.keyFeaturesHeading}
            extraHeading={selected.extraHeading}
        pointsHeading={selected.pointsHeading}
            title={selected.title}
            intro={selected.intro}
            points={selected.points}
            detailedFeatures={selected.detailedFeatures}
            extra={selected.extra}
            closing={selected.closing}
            imageSrc={selected.image}
            imageAlt={selected.title}
          />
        )}
      </Modal>
    </section>
  );
}