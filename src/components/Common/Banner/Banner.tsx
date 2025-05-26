import React from 'react'
import image from "../../../../public/images/commonImages/bannerImage.webp"
import Image from 'next/image'
const Banner = () => {
  return (
    <div>
      <Image alt='Banner' src={image}  className="object-cover" />
    </div>
  )
}

export default Banner
