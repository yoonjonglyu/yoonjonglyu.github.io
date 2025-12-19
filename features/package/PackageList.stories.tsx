import type { Meta, StoryObj } from '@storybook/react';

import PackageList from './PackageList';

const meta: Meta<typeof PackageList> = {
  title: 'Archive/Features/Package/PackageList',
  component: PackageList,
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof PackageList>;

export const Basic: Story = {
  args: {},
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};
