import React from "react";

const VisonAndMission = () => {
  return (
    <section className="py-10 px-5">
      <div className="text-[#1D1D1F] max-w-6xl xl:max-w-[75%] mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
        
        {/* Vision Card */}
        <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center justify-center text-center space-y-6">
          <h2 className="leading-[1.1] md:text-3xl lg:text-4xl text-3xl font-bold">
            Our Vision
          </h2>
          <p className="text-[#2A2A2A] text-lg lg:text-xl max-w-lg mx-auto">
            Quality Education At Affordable Cost
          </p>
        </div>

        {/* Mission Card */}
        <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center justify-center text-center space-y-6">
          <h2 className="leading-[1.1] md:text-3xl lg:text-4xl text-3xl font-bold">
            Our Mission
          </h2>
          <p className="text-[#2A2A2A] text-lg lg:text-xl max-w-lg mx-auto">
            Educating Generations Creating Better Individuals
          </p>
        </div>

      </div>
    </section>
  );
};

export default VisonAndMission;