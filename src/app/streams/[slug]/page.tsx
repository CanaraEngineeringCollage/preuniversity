import Subject from '@/components/Subjects/Subject'
import subjects from "@/lib/subjects.json"
import { notFound } from 'next/navigation'
import React from 'react'

type Params = {
  params: {
    slug: string
  }
}

export default function Page({ params }: Params) {
  const stream = subjects.streams.find((item) => item.slug === params.slug)

  if (!stream) return notFound()

  return <Subject {...stream} />
}

// 👇 Static generation for dynamic routes
export async function generateStaticParams() {
  return subjects.streams.map((stream) => ({
    slug: stream.slug,
  }))
}
