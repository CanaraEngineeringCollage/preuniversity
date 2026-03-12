import type { Metadata } from "next";
import FootprintsClient from "./FootprintsClient";

export const metadata: Metadata = {
  title: "Footprints – Canara Pre-University College, Mangalore",
  description:
    "Explore Footprints at Canara Pre-University College, Mangalore—event highlights, activities, and moments from campus life.",
  alternates: { canonical: "/footprints" },
};

export default function Page() {
  return <FootprintsClient />;
}