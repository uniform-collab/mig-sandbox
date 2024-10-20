/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { hostname: "flphmoegb.filerobot.com", protocol: "https" },
    ],
  },
};

module.exports = nextConfig;
