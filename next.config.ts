import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "docs",
  trailingSlash: true,
  assetPrefix: "/docs",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
