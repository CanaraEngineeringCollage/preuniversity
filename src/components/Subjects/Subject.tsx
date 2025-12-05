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

const language = [
  {
    title: "First Language",
    points: [
      "English"
    ],
  },
  {
    title: "Second Language",
    points: [
      "Kannada / Hindi / Sanskrit "
    
    ],
  }
];

export default function Subject( {name ,description,future_prospects_heading,future_prospects}:props ) {
  return(
    <>
    {/* <Banner/> */}

 <div className="max-w-7xl xl:max-w-[75%] px-5  mx-auto lg:py-16 text-[#1D1D1F] py-10">
  <h1 className=" text-[#1D1D1F] max-w-4xl leading-[1.2] text-3xl sm:text-4xl lg:text-5xl font-bold  ">
    {name}
  </h1>

  <p className="text-lg lg:text-xl text-justify leading-relaxed   text-[#2A2A2A] mb-4 lg:mb-10 mt-5 lg:mt-10">
    {description}
  </p>

  <h2 className=" text-[#1D1D1F]  text-xl text-justify lg:text-2xl font-bold mb-2 lg:mb-5">
    {future_prospects_heading}
  </h2>

  <div className="space-y-6 sm:space-y-8">
    {future_prospects.map((item, index) => (
      <div key={index}>
       <div className="heading text-justify max-w-3xl">

         <h3 className="text-lg text-justify  lg:text-xl font-bold text-[#0D3274] mb-2">
          {item.title}
        </h3>
       </div>

        <p className="text-lg text-justify lg:text-xl text-[#2A2A2A] mb-2">
          {item.sub_title}
        </p>

        {item.points && (
          <ul className="list-disc pl-6  text-justifytext-lg lg:text-xl text-[#2A2A2A]/90 space-y-2 sm:space-y-2">
            {item.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        )}
      </div>
    ))}
    {language.map((item, index) => (
  <div key={index} className="space-y-3">

    {/* Subtitle only */}
      <h3 className="text-lg text-justify  lg:text-xl font-bold text-[#0D3274] mb-2">
          {item.title}
        </h3>

    {/* Points */}
    {item.points && (
      <ul className="list-disc pl-6 text-lg lg:text-xl text-[#2A2A2A]/90 space-y-2">
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