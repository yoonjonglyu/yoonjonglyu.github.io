import React from 'react';
import type { Preview } from '@storybook/react';

import { GlobalCSS } from '../provider/style/GlobalCSS';
import ConfigureStore from '../store';
import ReactQueryProvider from '../provider/query/QueryProvider';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
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
