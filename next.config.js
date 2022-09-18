/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['miro.medium.com', 'cdn.freebiesupply.com', 'cdn.sanity.io'],
  },
};

module.exports = nextConfig;
