import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import HomeShelf from "./HomeShelf";

const meta: Meta<typeof HomeShelf> = {
  title: 'Archive/Features/Home/HomeShelf',
  component: HomeShelf,
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof HomeShelf>;

export const Basic: Story = {
  args: {},
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};