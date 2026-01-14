// eslint-disable-next-line @typescript-eslint/no-require-imports
const { withContentlayer } = require('next-contentlayer2');

// eslint-disable-next-line @typescript-eslint/no-require-imports
const withSerwist = require("@serwist/next").default({
  swSrc: "app/sw-root.ts", // 서비스 워커 로직이 담길 파일 위치
  swDest: "public/sw-archive.js",
  disable: process.env.NODE_ENV === "development",
});

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

module.exports = withContentlayer(withSerwist(nextConfig));
