import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import HomeSide from './HomeSide';

const meta: Meta<typeof HomeSide> = {
  title: 'Archive/Features/Home/HomeSide',
  component: HomeSide,
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof HomeSide>;

export const Basic: Story = {
  args: {},
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};
