import React from 'react';
import type { Preview } from '@storybook/react';

import { GlobalCSS } from '../provider/style/GlobalCSS';

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
      <>
        <GlobalCSS />
        <Story />
      </>
    ),
  ],
};

export default preview;
