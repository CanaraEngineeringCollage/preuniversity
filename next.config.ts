const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gorilla-email-storage.s3.us-east-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "cpucweb.canaraedu.org", // ⭐ Add your CMS domain here
      },
    ],
  },
};