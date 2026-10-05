import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        pathname: "/bkt-prod-storage/**"
      }
    ],
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;
