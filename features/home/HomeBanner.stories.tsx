import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import HomeBanner from './HomeBanner';

const meta: Meta<typeof HomeBanner> = {
  title: 'Archive/Features/Home/HomeBanner',
  component: HomeBanner,
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof HomeBanner>;

export const Basic: Story = {
  args: {},
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};
