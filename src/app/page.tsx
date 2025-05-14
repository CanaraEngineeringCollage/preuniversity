import Innovations from "@/components/HomePageComponents/CampusFacilities/CampusFacilities";
import ExploreStream from "@/components/HomePageComponents/ExploreStream/ExploreStream";
import FormComponent from "@/components/HomePageComponents/FormComponent/FormComponent";
import HeroBanner from "@/components/HomePageComponents/HeroSection/HeroSection";
import SeeYourSelf from "@/components/HomePageComponents/SeeYourSelf/SeeYourSelf";
import Image from "next/image";
import { title } from "process";





export default function Home() {
  return (
  <>
  <section>
    <HeroBanner/>
  </section>
  <section className="px-6 md:px-12 lg:px-16 xl:px-0 py-32">
    <SeeYourSelf/>
  </section>
  <section>
   <ExploreStream />
  </section>
  <section>
    <Innovations/>
  </section>
  <FormComponent/>
  </>
  );
}
