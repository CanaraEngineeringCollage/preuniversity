import Banner from "@/components/Common/Banner/Banner";
import ExploreCampus, { CarouselContext } from "@/components/Common/QuestionBank/QuestionBank";
import QuestionSection from "@/components/QuestionBankPageComponents/QuestionSection";
import data from "../../utils/exploreCampusData/exploreCampusData.json"
import React from "react";


const page = () => {
  return (
    <>
      <section>
        <Banner />
      </section>
      <section>
        <QuestionSection />
      </section>
       <section>
        <ExploreCampus campusEvents={data} title="Your Campus Hub" description="Stay updated with the latest news, events & achievements from across our campus" />
      </section>
    </>
  );
};

export default page;
