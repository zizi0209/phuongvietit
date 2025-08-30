// next.config.js
const isPages = process.env.GITHUB_ACTIONS === "true";
const repo = "TEN_REPO_CUA_BAN"; // đổi thành tên repo

/** @type {import('next').NextConfig} */
module.exports = {
  output: "export",
  images: { unoptimized: true },
  basePath: isPages ? `/${repo}` : "",
  assetPrefix: isPages ? `/${repo}/` : "",
  trailingSlash: true,
};
