import type { Meta, StoryObj } from '@storybook/react';

import PackageSide from './PackageSide';

const meta: Meta<typeof PackageSide> = {
  title: 'Archive/Features/Package/PackageSide',
  component: PackageSide,
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof PackageSide>;

export const Basic: Story = {
  args: {},
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};
