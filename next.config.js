/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "cdn.example.com"], // Add required image domains here
  },
  env: {
    // Adding the dark mode environment variable so that it can be accessed globally
    NEXT_PUBLIC_ENABLE_DARK_MODE: process.env.NEXT_PUBLIC_ENABLE_DARK_MODE,
  },
};

module.exports = nextConfig;
