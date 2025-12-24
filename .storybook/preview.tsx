import type { Preview } from '@storybook/nextjs-vite';

import { GlobalCSS } from '../provider/style/GlobalCSS';
import ConfigureStore from '../store';
import ReactQueryProvider from '../provider/query/QueryProvider';

const preview: Preview = {
  parameters: {
    nextjs: {
      // App Router를 사용하는 컴포넌트라면 필수 설정
      appDirectory: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ConfigureStore>
        <ReactQueryProvider>
          <GlobalCSS />
          <Story />
        </ReactQueryProvider>
      </ConfigureStore>
    ),
  ],
};

export default preview;
