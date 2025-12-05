import Innovations from "@/components/HomePageComponents/CampusFacilities/CampusFacilities";
import ExploreStream from "@/components/HomePageComponents/ExploreStream/ExploreStream";
import FormComponent from "@/components/HomePageComponents/FormComponent/FormComponent";
import HeroBanner from "@/components/HomePageComponents/HeroSection/HeroSection";
import HeroSectionMobile from "@/components/HomePageComponents/HeroSectionMobile/HeroSectionMobile";
import SeeYourSelf from "@/components/HomePageComponents/SeeYourSelf/SeeYourSelf";


export default function Home() {
  return (
  <>
  <section>
    <HeroBanner/>
  </section>
  {/* <section className="md:hidden">
    <HeroSectionMobile/>
  </section> */}
  <section>
    <SeeYourSelf/>
  </section>
  <section>
   <ExploreStream />
  </section>
  <section>
    <Innovations/>
  </section>
  <section className="lg:-mt-[270px]">
  <FormComponent/>
  </section>
  </>
  );
}
