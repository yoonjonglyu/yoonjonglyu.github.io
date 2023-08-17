import type { Meta, StoryObj } from '@storybook/react';

import SnippetSide from './SnippetSide';

const meta: Meta<typeof SnippetSide> = {
  title: 'Archive/Features/Snippet/SnippetSide',
  component: SnippetSide,
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof SnippetSide>;

export const Basic: Story = {
  args: {},
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};
