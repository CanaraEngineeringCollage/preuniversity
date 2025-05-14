import DeanMessage from "@/components/AboutPageComponents/MessageFromDean/DeanMessage";
import PrincipalMessage from "@/components/AboutPageComponents/MessageFromPrincipal/PrincipalMessage";
import Opportunity from "@/components/AboutPageComponents/OpportunitySection/Opportunity";
import VisonAndMission from "@/components/AboutPageComponents/VisionAndMission/VisonAndMission";
import Banner from "@/components/Common/Banner/Banner";
import React from "react";

const page = () => {
  return (
    <>
      <Banner />
      <div className="mx-72">
        <Opportunity />
        <VisonAndMission />
        <DeanMessage />
        <PrincipalMessage />
      </div>
    </>
  );
};

export default page;
