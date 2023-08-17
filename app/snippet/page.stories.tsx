import type { Meta, StoryObj } from '@storybook/react';

import SnippetPage from './page';

const meta: Meta<typeof SnippetPage> = {
  title: 'Archive/Page/Snippet',
  component: SnippetPage,
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof SnippetPage>;

export const Basic: Story = {
  args: {},
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};
