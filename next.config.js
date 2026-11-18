/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Base URL for Open Graph / sitemap
  siteUrl: 'https://agenticworkflows.site',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

module.exports = nextConfig;
