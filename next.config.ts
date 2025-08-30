/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["yourdomain.com"], // nếu có ảnh external
  },
};

module.exports = nextConfig;
