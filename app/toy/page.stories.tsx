import type { Meta, StoryObj } from '@storybook/react';

import ToyPage from './page';

const meta: Meta<typeof ToyPage> = {
  title: 'Archive/Page/Toy',
  component: ToyPage,
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof ToyPage>;

export const Basic: Story = {
  args: {},
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};
