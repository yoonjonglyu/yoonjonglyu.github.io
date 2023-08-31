import type { Meta, StoryObj } from '@storybook/react';

import ToyArticle from './ToyArticle';

const meta: Meta<typeof ToyArticle> = {
  title: 'Archive/Features/Toy/ToyArticle',
  component: ToyArticle,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ToyArticle>;

export const Basic: Story = {
  args: {},
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};
