import React from "react";

const ConductSection = () => {
  const points: string[] = [
    "Indiscipline shall be strictly dealt with.",
    "Students will not be allowed to go out of the college campus during college hours (including lunch break). Students should bring their lunch from home or eat in the college canteen.",
    "Regular attendance is strictly insisted upon. According to the regulations of the P.U.E. Department, each student is required to keep at least 75% of the attendance in each subject to appear for the examination. Under no circumstance shall attendance be condoned.",
    "Students are forbidden to bring any motor vehicle into the college campus.",
    "Use of mobile telephones, mp3 and other electronic devices are banned in the college campus. Any device, if found, shall be confiscated and the student will be fined. Parents are requested to make a note of this rule.",
    "Ragging is a serious offence and offenders will face immediate dismissal from the college.",
    "Serious action will also be taken against eve-teasers, when reported.",
    "Students are required to live either with their parents or guardians or in a hostel or in rooms approved by the Dean. Any change in residence should be intimated to the college authorities immediately.",
    "The parents of such students residing in Hostel/Paying Guest accommodation should make it a point to visit them regularly, and also monitor their academic progress and meet the concerned lecturers.",
  ];

  return (
    <section className="max-w-7xl xl:max-w-[75%] text-[#86868B] lg:mx-auto py-10 lg:py-32  mx-[15px]">
      <h1 className="lg:text-[54px] text-[32px] font-bold text-[#1D1D1F] mb-5 lg:mb-28">Code of Conduct</h1>
      <p>
        All students shall observe the rules and regulations laid down in the college calendar and those that may be framed from time to time. All
        parents are also required to familiarize themselves with these rules. Every student is therefore deemed to have agreed to abide by the rules
        laid down in the college calendar.
      </p>
      <ul className="list-disc ml-8 mt-5 space-y-2">
        {points.map((point, index) => (
          <li>{point}</li>
        ))}
      </ul>

      <h1 className="text-xl font-bold text-[#1D1D1F] mt-10 mb-3">Dress Code</h1>
      <p>
        Students are expected to dress in uniform prescribed by the college authorities and the I.D. card at all times in the college campus on all
        working days. Students not wearing teh prescribed uniform or the I.D.card will not be allowed to enter the campus.
      </p>
    </section>
  );
};

export default ConductSection;
