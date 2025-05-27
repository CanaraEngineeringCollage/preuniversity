import ExploreCampus from "@/components/Common/QuestionBank/QuestionBank";
import React from "react";
import data from "../../utils/exploreCampusData/exploreCampusData.json";

const page = () => {
  return (
    <div>
      <ExploreCampus
        campusEvents={data}
        title="Your Campus Hub"
        description="Stay updated with the latest news, events & achievements from across our campus"
      />
    </div>
  );
};

export default page;
