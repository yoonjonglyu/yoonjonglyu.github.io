import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import WorkArticlePage from './page';

const meta: Meta<typeof WorkArticlePage> = {
  title: 'Archive/Page/Work/Article',
  component: WorkArticlePage,
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof WorkArticlePage>;

export const Basic: Story = {
  args: {},
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};
