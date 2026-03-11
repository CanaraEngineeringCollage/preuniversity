"use client";

import dynamic from "next/dynamic";
import Innovations from "@/components/HomePageComponents/CampusFacilities/CampusFacilities"; // <-- remove this import
// Instead use dynamic import below

import ExploreStream from "@/components/HomePageComponents/ExploreStream/ExploreStream";
import FormComponent from "@/components/HomePageComponents/FormComponent/FormComponent";
import HeroBanner from "@/components/HomePageComponents/HeroSection/HeroSection";
import SeeYourSelf from "@/components/HomePageComponents/SeeYourSelf/SeeYourSelf";

// Load Innovations only on client → avoids hydration mismatch
const DynamicInnovations = dynamic(
  () =>
    import(
      "@/components/HomePageComponents/CampusFacilities/CampusFacilities"
    ),
  { ssr: false }
);

export default function Home() {
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

      {/* FIXED: This component renders only on client → no SSR mismatch */}
      <section>
        <DynamicInnovations />
      </section>

      <section className="lg:-mt-[270px]">
        <FormComponent />
      </section>
    </>
  );
}
