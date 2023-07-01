import type { Meta, StoryObj } from '@storybook/react';

import BasicLayout from './BasicLayout';

const meta: Meta<typeof BasicLayout> = {
  title: 'Archive/Ui/Layouts/BasicLayout',
  component: BasicLayout,
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof BasicLayout>;

export const Basic: Story = {
  args: {
  },
};