import AcademicToppers from "@/components/AchievementsPageComponenets/AcademicToppers"
import NonAcademicToppers from "@/components/AchievementsPageComponenets/NonAcademicToppers"



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