import AcademicToppers from "@/components/AchievementsPageComponenets/AcademicToppers"
import NonAcademicToppers from "@/components/AchievementsPageComponenets/NonAcademicToppers"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Achievements – Canara Pre-University College, Mangalore",
  description:
    "Explore academic and non-academic achievements of Canara Pre-University College, Mangalore—toppers, awards, and student success stories.",
  alternates: { canonical: "/achievements" },
}



const page = () => {
  return (
    <>
   <section>
    <AcademicToppers/>
   </section>
      <section>
    <NonAcademicToppers/>
   </section>
   </>
  )
}

export default page