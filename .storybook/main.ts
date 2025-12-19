import type { StorybookConfig } from '@storybook/nextjs-vite';

const config: StorybookConfig = {
  stories: ['../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-links',
  ],
  framework: {
    name: '@storybook/nextjs-vite',
    options: {},
  },
// .storybook/main.ts
viteFinal: async (config) => {
  const { mergeConfig } = await import('vite');
  return mergeConfig(config, {
    optimizeDeps: {
      // 에러가 발생하는 원천인 next 관련 도구들을 최적화에서 제외하거나
      // 문제가 되는 라이브러리를 강제로 포함시킵니다.
      exclude: ['next/dist/next-devtools/userspace/app/forward-logs-utils'],
      include: ['safe-stable-stringify'],
    },
    build: {
      commonjsOptions: {
        // CJS 모듈 변환을 더 엄격하게 적용
        transformMixedEsModules: true,
      },
    },
    resolve: {
      alias: {
        // 에러가 발생하는 파일을 빈 파일이나 모킹된 파일로 대체
        'next/dist/next-devtools/userspace/app/forward-logs-utils': false,
      },
    },
  });
},
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
  },
};

export default config;
