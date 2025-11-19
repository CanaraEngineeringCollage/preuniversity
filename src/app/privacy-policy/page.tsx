import PrivacySection from '@/components/PrivacyPolicyPageComponents/PrivacySection/PrivacySection'
import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – Canara Pre-University College, Mangalore",
  description:
    "Read the Privacy Policy of Canara Pre-University College, Mangalore. Learn how we collect, use, protect, and manage your personal information in compliance with data protection standards.",
  keywords: [
    "Canara PU College Privacy Policy",
    "Privacy Policy Canara College",
    "Data protection Canara PU",
    "College privacy statement",
    "PUC website privacy policy",
    "Canara Institutions data usage",
    "Student data privacy Mangalore",
    "Website policy Canara PU College",
  ],
  authors: [
    {
      name: "Canara Pre-University College, Mangalore",
      url: "https://canarapucollege.com",
    },
  ],
  openGraph: {
    title: "Privacy Policy – Canara Pre-University College, Mangalore",
    description:
      "Understand how Canara PU College collects, uses, and protects personal information through this Privacy Policy.",
    url: "https://canarapucollege.com/privacy-policy",
    siteName: "Canara PU College Mangalore",
    images: [
      {
        url: "/icon.png", // replace with a banner if available
        width: 1200,
        height: 630,
        alt: "Privacy Policy – Canara PU College",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy – Canara PU College, Mangalore",
    description:
      "Learn about our data protection, privacy practices, and information handling policies.",
    images: ["/icon.png"],
  },
};

const page = () => {
  return (
    <div>
      <PrivacySection/>
    </div>
  )
}

export default page
