import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: 'sintrop.com' }
    ]
  }
};

export default nextConfig;
