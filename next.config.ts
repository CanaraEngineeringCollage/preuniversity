// @ts-nocheck
/* eslint-disable */

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gorilla-email-storage.s3.us-east-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "cpucweb.canaraedu.org", // Your CMS domain
      },
      {
        protocol: "https",
        hostname: "assets.unlayer.com", // 🔹 Added Unlayer to fix the 400 Bad Request error
      },
    ],
  },
};

export default nextConfig;