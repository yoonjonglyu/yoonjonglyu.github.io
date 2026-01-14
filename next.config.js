// eslint-disable-next-line @typescript-eslint/no-require-imports
const { withContentlayer } = require('next-contentlayer2');

// eslint-disable-next-line @typescript-eslint/no-require-imports
const withSerwist = require('@serwist/next').default({
  swSrc: 'app/sw-root.ts',
  swDest: 'public/sw-archive.js', // 최종 생성 파일명
  disable: process.env.NODE_ENV === 'development',
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
  // 중요한 점: 현재 Serwist는 Turbopack을 공식 지원하지 않습니다.
  // 빌드 시 Turbopack을 명시적으로 끄거나 webpack 환경임을 보장해야 합니다.
  turbopack: {},
  transpilePackages: ['styled-components'],
  webpack: (config) => {
    return config;
  },
};

// 합치는 순서를 바꿔봅니다. 보통 Serwist가 가장 바깥에 있는 것이 안정적입니다.
module.exports = withSerwist(withContentlayer(nextConfig));
