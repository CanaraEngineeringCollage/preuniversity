import type { Metadata } from "next";
import MatKabaddiClient from "./MatKabaddiClient";

export const metadata: Metadata = {
  title: "Mat Kabaddi – Canara Pre-University College, Mangalore",
  description:
    "Mat Kabaddi at Canara Pre-University College, Mangalore—event details, highlights, and updates.",
  alternates: { canonical: "/mat-kabaddi" },
};

export default function Page() {
  return <MatKabaddiClient />;
}