import Subject from '@/components/Subjects/Subject'
import subjects from "@/lib/subjects.json"
import { notFound } from 'next/navigation'
import type { Metadata } from "next"

type Params = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const stream = subjects.streams.find((item) => item.slug === params.slug)

  if (!stream) return { title: "Stream Not Found | Canara PU College" }

  const pageTitle = `${stream.name} – Canara Pre-University College, Mangalore`
  const pageDescription = stream.description.slice(0, 160) // SEO safe length

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [
      stream.name,
      `${stream.slug} PU College`,
      "PUC Science Streams",
      "PUC Commerce Streams",
      "Canara PU College Streams",
      "Pre University Courses Mangalore"
    ],
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `https://canarapucollege.com/streams/${params.slug}`,
      siteName: "Canara PU College Mangalore",
      images: [
        {
          url: "/icon.png",
          width: 1200,
          height: 630,
          alt: `${stream.name} – Stream Details`
        }
      ],
      locale: "en_US",
      type: "article"
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: ["/icon.png"]
    }
  }
}

export default function Page({ params }: Params) {
  const stream = subjects.streams.find((item) => item.slug === params.slug)

  if (!stream) return notFound()

  return <Subject {...stream} />
}

// generate static paths
export async function generateStaticParams() {
  return subjects.streams.map((stream) => ({
    slug: stream.slug
  }))
}
