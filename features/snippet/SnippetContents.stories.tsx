import type { Meta, StoryObj } from '@storybook/react';

import SnippetContents from './SnippetContents';

const meta: Meta<typeof SnippetContents> = {
  title: 'Archive/Features/Snippet/SnippetContents',
  component: SnippetContents,
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof SnippetContents>;

export const Basic: Story = {
  args: {},
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};
