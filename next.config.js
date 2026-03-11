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
  async rewrites() {
    return [
      // Leading Through Uncertainty series — proxied to WordPress until migrated
      { source: '/insights/the-road-ahead-2', destination: 'https://therailway.us/the-road-ahead-2/' },
      { source: '/insights/lead-yourself-first', destination: 'https://therailway.us/lead-yourself-first/' },
      { source: '/insights/leading-through-uncertainty-part-2', destination: 'https://therailway.us/leading-through-uncertainty-part-2/' },
      { source: '/insights/leaders-navigate-uncertainty', destination: 'https://therailway.us/leaders-navigate-uncertainty/' },
    ];
  },
};

module.exports = nextConfig;
