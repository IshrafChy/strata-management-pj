/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "cdn.example.com"], // Add required image domains here
  },
};

module.exports = nextConfig;
