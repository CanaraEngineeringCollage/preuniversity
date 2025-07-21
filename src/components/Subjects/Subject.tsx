"use client"

import React, { useState } from 'react'
import Banner from '../Common/Banner/Banner'
import stream from '@/lib/stream.json'
import { useParams } from 'next/navigation'


const Subject = () => {
  const { slug } = useParams();

  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const mainStreams = stream.find((dept) => dept.slug === slug);


  //  const streamItems = [
  //   "Stream content",
  // ]


  return (
    <>
      <Banner />

      <h1 className='text-4xl text-center text-black'>{mainStreams?.name}</h1>
    </>)
}

export default Subject