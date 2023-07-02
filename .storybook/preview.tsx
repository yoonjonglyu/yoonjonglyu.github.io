import React from 'react';
import type { Preview } from '@storybook/react';
import { createGlobalStyle } from 'styled-components';

const GlobalCSS = createGlobalStyle`
   :root {
    --color-background-space: #12172f;
    --color-background-card: #1e202c;
    --color-point: #8a40b8;
    --color-rare: #c4c118;
    --color-unique: #9e2e06;
    --color-legend: #6e0303;
  }
  body {
    background: var(--color-background-space);
    font-family: 'Noto Sans', sans-serif;
    font-family: 'Noto Sans KR', sans-serif;
    &::-webkit-scrollbar {
      width: 8px;
      background: none;
    }
    &::-webkit-scrollbar-thumb {
      background: var(--color-point);
      border-radius: 12px;
    }
    &::-webkit-scrollbar-track {
      background: var(--color-background-card);
      border-radius: 12px;
    }
  }
`;

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
