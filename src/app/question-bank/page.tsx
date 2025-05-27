import Banner from "@/components/Common/Banner/Banner";
import QuestionSection from "@/components/QuestionBankPageComponents/QuestionSection";
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
      
    </>
  );
};

export default page;
