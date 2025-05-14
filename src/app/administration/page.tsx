import AdministrationMembers from '@/components/AdministrationPageComponents/CardComponent/CardComponent'
import Banner from '@/components/Common/Banner/Banner'
import React from 'react'

const page = () => {
  return (
 <>
 <section>
    <Banner/>
 </section>
 <section>
  <AdministrationMembers/>
 </section>
 
 </>
  )
}

export default page
