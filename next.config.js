const isGithubActions = !!process.env.IS_GITHUB_ACTIONS;

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(isGithubActions
    ? { output: "export", basePath: "/cleantank", assetPrefix: "/cleantank/" }
    : {}),
  allowedDevOrigins: ["*", "192.168.1.6"],
  reactStrictMode: true,
  images: {
    unoptimized: isGithubActions,
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
