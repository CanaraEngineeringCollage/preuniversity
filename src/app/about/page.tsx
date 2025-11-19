import DeanMessage from "@/components/AboutPageComponents/MessageFromDean/DeanMessage";
import PrincipalMessage from "@/components/AboutPageComponents/MessageFromPrincipal/PrincipalMessage";
import Opportunity from "@/components/AboutPageComponents/OpportunitySection/Opportunity";
import VisonAndMission from "@/components/AboutPageComponents/VisionAndMission/VisonAndMission";
import Banner from "@/components/Common/Banner/Banner";
import React from "react";



import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us – Canara Pre-University College, Mangalore",
  description:
    "Learn about Canara Pre-University College, Mangalore—its legacy, mission, vision, leadership, and commitment to delivering quality education in Science and Commerce streams since 1972.",
  keywords: [
    "Canara PU College",
    "About Canara PU College",
    "PU College Mangalore",
    "Best PU College in Mangalore",
    "PUC Science Commerce Mangalore",
    "Canara Institutions",
    "PUC Principal Message",
    "PUC Dean Message",
    "College Vision and Mission",
  ],
  authors: [
    {
      name: "Canara Pre-University College, Mangalore",
      url: "https://canarapucollege.com",
    },
  ],
  openGraph: {
    title: "About Us – Canara Pre-University College, Mangalore",
    description:
      "Discover the history, core values, vision, mission, and leadership of Canara Pre-University College, a premier institution serving students since 1972.",
    url: "https://canarapucollege.com/about",
    siteName: "Canara PU College Mangalore",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "Canara PU College Mangalore About Page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Canara Pre-University College, Mangalore",
    description:
      "Learn about our institution’s values, vision, mission, and leadership shaping the future of PUC education in Mangalore.",
    images: ["/icon.png"],
  },
};

const page = () => {
  return (
    <>
      <Banner />
      <Opportunity />
      <VisonAndMission />
      <DeanMessage />
      <PrincipalMessage />
    </>
  );
};

export default page;
