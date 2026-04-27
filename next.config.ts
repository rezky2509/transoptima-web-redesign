import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  // Deployment for static web page
    images: {
    unoptimized: true,
  },
};

export default nextConfig;
