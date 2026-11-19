/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Custom runtime config – you can read this via `getConfig().publicRuntimeConfig`
  publicRuntimeConfig: {
    siteUrl: 'https://agenticworkflows.site',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
};

module.exports = nextConfig;
