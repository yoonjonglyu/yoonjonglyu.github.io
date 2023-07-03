import type { Meta, StoryObj } from '@storybook/react';

import SideCard from './SideCard';

const meta: Meta<typeof SideCard> = {
  title: 'Archive/Ui/Molecules/SideCard',
  component: SideCard,
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof SideCard>;

export const Basic: Story = {
  args: {
  },
};