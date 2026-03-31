/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["*", "192.168.1.6"],
  reactStrictMode: true,
  images: {
    remotePatterns: [],
  },
};

module.exports = nextConfig;
