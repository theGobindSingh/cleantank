/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["*", "192.168.1.6"],
  reactStrictMode: true,
  images: {
    qualities: [100, 75, 50, 25],
    deviceSizes: [640, 1024, 1920],
    remotePatterns: [
      {
        hostname: "images.pexels.com",
        pathname: "/photos/**",
      },
    ],
  },
};

module.exports = nextConfig;
