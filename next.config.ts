import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "docs",
  trailingSlash: true,
  assetPrefix: "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
