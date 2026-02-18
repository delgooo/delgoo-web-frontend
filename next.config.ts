import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/delgoo-web-frontend" : "",
  assetPrefix: isProd ? "/delgoo-web-frontend/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
