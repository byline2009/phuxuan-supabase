import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'phuxuanschool.edu.vn',
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
