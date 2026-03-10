/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/Textak-AI/trw-assets/**',
      },
    ],
  },
};

module.exports = nextConfig;
