// next.config.js
const isCI = process.env.GITHUB_ACTIONS === "true";
const repo = isCI ? process.env.GITHUB_REPOSITORY?.split("/")[1] : "";

/** @type {import('next').NextConfig} */
module.exports = {
  output: "export",
  images: { unoptimized: true }, // bắt buộc khi static export
  basePath: isCI ? `/${repo}` : "", // ví dụ: /phuongvietit
  assetPrefix: isCI ? `/${repo}/` : "",
  trailingSlash: true,
  // Cho client và code có thể đọc basePath mà không đụng next/config
  env: {
    NEXT_PUBLIC_BASE_PATH: isCI ? `/${repo}` : "",
  },
};
