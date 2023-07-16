import type { Meta, StoryObj } from '@storybook/react';

import HomeContents from './HomeContents';

const meta: Meta<typeof HomeContents> = {
  title: 'Archive/Features/Home/HomeContents',
  component: HomeContents,
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof HomeContents>;

export const Basic: Story = {
  args: {},
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};
