import React from "react"
import Banner from "../Common/Banner/Banner"

type props ={
  name:string
  description:string
  future_prospects_heading:string
  future_prospects:{
    title:string
    sub_title?:string
  points?:string[]
  }[]
  }


export default function Subject( {name ,description,future_prospects_heading,future_prospects}:props ) {
  return(
    <>
    <Banner/>

 <div className="max-w-7xl xl:max-w-[75%] px-5  mx-auto sm:px-3 lg:px-8 py-12 text-[#1D1D1F] mb-5 lg:mb-12">
  <h1 className=" text-[#1D1D1F] max-w-4xl leading-[1.2] text-3xl sm:text-4xl lg:text-5xl font-bold mb-6  sm:py-10">
    {name}
  </h1>

  <p className="text-base sm:text-[17px] text-start leading-relaxed   text-[#86868B] mb-4 lg:mb-10">
    {description}
  </p>

  <h2 className=" text-[#1D1D1F] text-lg sm:text-2xl font-bold mb-2 sm:mb-4 py-2 sm:py-5">
    {future_prospects_heading}
  </h2>

  <div className="space-y-6 sm:space-y-8">
    {future_prospects.map((item, index) => (
      <div key={index}>
       <div className="heading max-w-3xl">

         <h3 className="text-lg  sm:text-xl font-bold text-[#0D3274] mb-2">
          {item.title}
        </h3>
       </div>

        <p className="text-base sm:text-[17px] text-[#86868B] mb-2">
          {item.sub_title}
        </p>

        {item.points && (
          <ul className="list-disc pl-6 text-base sm:text-[17px] text-[#86868B]/90 space-y-2 sm:space-y-2">
            {item.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        )}
      </div>
    ))}
  </div>
</div>

    
    </>
  )
}