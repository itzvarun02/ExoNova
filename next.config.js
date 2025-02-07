/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true, // Required for static export
    },
    basePath: "/ExoNova", // Set the GitHub repository name
    assetPrefix: "/ExoNova/",
  };
  
  module.exports = nextConfig;
  