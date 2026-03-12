import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Canara Pre-University College, Mangalore – Empowering Futures Since 1972",
  description:
    "Canara Pre-University College, Mangalore offers two-year PUC education in Science (PCMB, PCMC, PCME, PCMS) and Commerce (BSBA, BEBA, CSBA, SEBA, HEBA) in a supportive, co-educational environment since 1972.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return <HomeClient />;
}
