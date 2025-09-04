// next.config.ts (hoặc .mjs)
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true }, // quan trọng cho GitHub Pages
  basePath: isProd ? "/phuongvietit" : "",
  assetPrefix: isProd ? "/phuongvietit/" : "",
};

export default nextConfig;
