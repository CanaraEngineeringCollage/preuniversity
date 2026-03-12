// @ts-nocheck
/* eslint-disable */

import type { NextConfig } from "next";

const nextConfig = {
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
        hostname: "cpucweb.canaraedu.org", // Added your CMS domain
      },
    ],
  },
};

export default nextConfig;