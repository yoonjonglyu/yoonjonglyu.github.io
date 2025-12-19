import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'Archive/Ui/Atoms/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Basic: Story = {
  args: {
    css: 'height: 500px;'
  },
};