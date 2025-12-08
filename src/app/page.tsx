
"use client";

import { useEffect, useState } from "react";
import Innovations from "@/components/HomePageComponents/CampusFacilities/CampusFacilities";
import ExploreStream from "@/components/HomePageComponents/ExploreStream/ExploreStream";
import FormComponent from "@/components/HomePageComponents/FormComponent/FormComponent";
import HeroBanner from "@/components/HomePageComponents/HeroSection/HeroSection";
import HeroSectionMobile from "@/components/HomePageComponents/HeroSectionMobile/HeroSectionMobile";
import SeeYourSelf from "@/components/HomePageComponents/SeeYourSelf/SeeYourSelf";


export default function Home() {
    const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
  <>
  <section>
    <HeroBanner/>
  </section>
  

  <section>
    <SeeYourSelf/>
  </section>
  <section>
   <ExploreStream />
  </section>
   {mounted && (
        <section>
          <Innovations />
        </section>
      )}
  <section className="lg:-mt-[270px]">
  <FormComponent/>
  </section>
  </>
  );
}

