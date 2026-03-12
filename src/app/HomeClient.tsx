"use client";

import dynamic from "next/dynamic";

import ExploreStream from "@/components/HomePageComponents/ExploreStream/ExploreStream";
import FormComponent from "@/components/HomePageComponents/FormComponent/FormComponent";
import HeroBanner from "@/components/HomePageComponents/HeroSection/HeroSection";
import SeeYourSelf from "@/components/HomePageComponents/SeeYourSelf/SeeYourSelf";

const DynamicCampusFacilities = dynamic(
  () =>
    import("@/components/HomePageComponents/CampusFacilities/CampusFacilities"),
  { ssr: false }
);

export default function HomeClient() {
  return (
    <>
      <section>
        <HeroBanner />
      </section>

      <section>
        <SeeYourSelf />
      </section>

      <section>
        <ExploreStream />
      </section>

      <section>
        <DynamicCampusFacilities />
      </section>

      <section className="lg:-mt-[270px]">
        <FormComponent />
      </section>
    </>
  );
}

