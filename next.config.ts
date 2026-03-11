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

  // ⭐ ADD THIS BLOCK TO FIX next/image DOMAIN ERROR ⭐
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gorilla-email-storage.s3.us-east-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
