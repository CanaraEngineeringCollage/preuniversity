import ExploreCampus from "@/components/Common/QuestionBank/QuestionBank";
import React from "react";
import data from "../../utils/exploreCampusData/exploreCampusData.json";
import Magazine from "@/components/BuzzComponents/Magazine/Magazine";

const page = () => {
  return (
    <div>
    <Magazine /> 

      <ExploreCampus
        campusEvents={data}
        title="Your Campus Hub"
        description="Stay updated with the latest news, events & achievements from across our campus"
      />
    </div>
  );
};

export default page;
