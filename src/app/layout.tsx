import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Common/Layout/Layout";
import localFont from "next/font/local";
import ScrollToTopButton from "@/components/Common/ScrollToTopButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const helveticaNow = localFont({
  src: [
    {
      path: "./fonts/helveticaNow/HelveticaNowDisplay-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/helveticaNow/HelveticaNowDisplay-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/helveticaNow/HelveticaNowDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/helveticaNow/HelveticaNowDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/helveticaNow/HelveticaNowDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/helveticaNow/HelveticaNowDisplay-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-helvetica",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Canara Pre-University College, Mangalore – Empowering Futures Since 1972",
  description: "Canara P.U. College, Mangalore offers two-year Pre-University education in Science (PCMB, PCMC, PCME, PCMS) and Commerce (BSBA, BEBA, CSBA, SEBA, HEBA). Co-educational, inclusive of all castes and creeds since 1972.",
  keywords: ["Canara PU College", "Pre University College Mangalore", "PCMB PCMC PCMS", "BSBA BEBA CSBA SEBA HEBA", "PU College admissions Mangalore", "education Mangalore"],
  authors: [{ name: "Canara Pre-University College, Mangalore", url: "https://canarapucollege.com" }],
  openGraph: {
    title: "Canara Pre-University College, Mangalore",
    description: "Providing quality pre-university education in Science & Commerce streams since 1972 in Mangalore.",
    url: "https://canarapucollege.com",
    siteName: "Canara PU College Mangalore",
    images: [
      {
        url: "/icon.png", // replace with actual image URL
        width: 1200,
        height: 630,
        alt: "Canara PU College Mangalore Campus"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Canara Pre-University College, Mangalore",
    description: "Co-educational pre-university institution offering Science & Commerce since 1972.", 
    images: ["/icon.png"], // replace with actual
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${geistSans.variable} ${geistMono.variable} ${helveticaNow.variable} antialiased`}>
        <Layout>{children} <ScrollToTopButton/></Layout>
      </body>
    </html>
  );
}
