import type { Meta, StoryObj } from '@storybook/react';

import ToyList from './ToyList';

const meta: Meta<typeof ToyList> = {
  title: 'Archive/Features/Toy/ToyList',
  component: ToyList,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ToyList>;

export const Basic: Story = {
  args: {},
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};
