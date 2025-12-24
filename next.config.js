// eslint-disable-next-line @typescript-eslint/no-require-imports
const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: { unoptimized: true },
  compiler: {
    styledComponents: true,
  },
  turbopack: {},
};

module.exports = withContentlayer(nextConfig);
