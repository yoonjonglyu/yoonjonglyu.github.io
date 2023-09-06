import React from 'react';
import type { Preview } from '@storybook/react';

import { GlobalCSS } from '../provider/style/GlobalCSS';
import ConfigureStore from '../store';

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
        <GlobalCSS />
        <Story />
      </ConfigureStore>
    ),
  ],
};

export default preview;
