import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Bal-m",
  assetPrefix: "/Bal-m",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
