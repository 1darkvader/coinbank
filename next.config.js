/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  output: 'export',
  distDir: 'out',
  trailingSlash: true
};

module.exports = nextConfig;
