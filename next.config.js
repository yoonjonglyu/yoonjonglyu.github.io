// eslint-disable-next-line @typescript-eslint/no-require-imports
const { withContentlayer } = require('next-contentlayer2');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  compiler: {
    styledComponents: true,
  },
  turbopack: {},
  transpilePackages: ['styled-components'],
};

module.exports = withContentlayer(nextConfig);
