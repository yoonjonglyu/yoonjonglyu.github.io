import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import WorkArticle from './WorkArticle';

const meta: Meta<typeof WorkArticle> = {
  title: 'Archive/Features/Work/WorkArticle',
  component: WorkArticle,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof WorkArticle>;

export const Basic: Story = {
  args: {},
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};
