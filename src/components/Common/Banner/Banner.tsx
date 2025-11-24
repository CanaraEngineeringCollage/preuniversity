import React from 'react'
import image from "../../../../public/images/commonImages/bannerImage.webp"
import Image from 'next/image'


export const Banner = () => {
  return (
    <div>
      <Image alt='Banner' src={image}  className="object-cover h-[30vh] md:h-full" />
    </div>
  )
}

export default Banner
