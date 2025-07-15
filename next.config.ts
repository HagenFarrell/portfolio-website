/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio-website' : '', // Replace <repo-name> with your GitHub repo name (e.g., 'my-app')
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio-website' : '', // Ensures assets are correctly pathed
  images: {
    unoptimized: true, // Disables image optimization for static export
  },
};

module.exports = nextConfig;