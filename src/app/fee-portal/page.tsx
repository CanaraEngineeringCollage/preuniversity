import Results from "@/components/Common/Results/Results";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fee Portal – Canara Pre-University College, Mangalore",
  description:
    "Access the official Fee Portal of Canara Pre-University College, Mangalore. Make secure online payments, view fee structures, track transactions, and stay updated with payment-related notifications.",
  keywords: [
    "Canara PU College Fee Portal",
    "PUC fee payment online",
    "College fees Mangalore",
    "Canara PU College fee structure",
    "PUC online payment",
    "College payment gateway",
    "Canara Institutions fees",
    "PUC commerce science fees",
  ],
  authors: [
    {
      name: "Canara Pre-University College, Mangalore",
      url: "https://canarapucollege.com",
    },
  ],
  openGraph: {
    title: "Fee Portal – Canara Pre-University College, Mangalore",
    description:
      "Securely pay your college fees online using the official Canara PU College Fee Portal.",
    url: "https://canarapucollege.com/fee-portal",
    siteName: "Canara PU College Mangalore",
    images: [
      {
        url: "/icon.png", // replace with actual payment banner if available
        width: 1200,
        height: 630,
        alt: "Canara PU College Fee Portal",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fee Portal – Canara PU College, Mangalore",
    description:
      "Make safe and convenient online fee payments through the Canara PU College official portal.",
    images: ["/icon.png"],
  },
};

const page = () => {
  return (
    <section>
      <Results title="Fee Portal" image="/images/commonImages/bannerImage.webp" text="Check Fee Status" />
    </section>
  );
};

export default page;
