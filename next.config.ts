// next.config.js
const isCI = process.env.GITHUB_ACTIONS === "true";
const repo = isCI ? process.env.GITHUB_REPOSITORY?.split("/")[1] : "";

/** @type {import('next').NextConfig} */
module.exports = {
  output: "export",
  images: { unoptimized: true }, // bắt buộc khi export
  basePath: isCI ? `/${repo}` : "", // ví dụ: /phuongvietit
  assetPrefix: isCI ? `/${repo}/` : "",
  trailingSlash: true, // giúp Pages phục vụ route tĩnh tốt hơn
};
