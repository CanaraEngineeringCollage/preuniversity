import AdministrationMembers from "@/components/AdministrationPageComponents/CardComponent/CardComponent";
import Banner from "@/components/Common/Banner/Banner";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Administration – Canara Pre-University College, Mangalore",
  description:
    "Meet the administration team of Canara Pre-University College, Mangalore. Our experienced leadership works together to ensure academic excellence, discipline, and student success since 1972.",
  keywords: [
    "Canara PU College Administration",
    "Canara PU College Staff",
    "PU College Management Mangalore",
    "PUC Administration Team",
    "Canara Institutions Mangalore",
    "College Leadership",
    "PUC Office Staff",
    "Canara College Committee",
  ],
  authors: [
    {
      name: "Canara Pre-University College, Mangalore",
      url: "https://canarapucollege.com",
    },
  ],
  openGraph: {
    title: "Administration – Canara Pre-University College, Mangalore",
    description:
      "Explore the administration and leadership team responsible for managing Canara Pre-University College with excellence and integrity.",
    url: "https://canarapucollege.com/administration",
    siteName: "Canara PU College Mangalore",
    images: [
      {
        url: "/icon.png", // replace with page banner if available
        width: 1200,
        height: 630,
        alt: "Canara PU College Administration Team",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Administration – Canara Pre-University College, Mangalore",
    description:
      "Get to know the administration and management team behind Canara Pre-University College.",
    images: ["/icon.png"],
  },
};

const page = () => {
  return (
    <>
      <section>
        <Banner />
      </section>
      <section>
        <AdministrationMembers />
      </section>
    </>
  );
};

export default page;
