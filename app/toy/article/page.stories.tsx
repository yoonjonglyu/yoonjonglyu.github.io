import type { Meta, StoryObj } from '@storybook/react';

import ToyArticlePage from './page';

const meta: Meta<typeof ToyArticlePage> = {
  title: 'Archive/Page/Toy/Article',
  component: ToyArticlePage,
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof ToyArticlePage>;

export const Basic: Story = {
  args: {},
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};
