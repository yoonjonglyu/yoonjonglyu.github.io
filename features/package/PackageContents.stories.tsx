import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import PackageContents from './PackageContents';

const meta: Meta<typeof PackageContents> = {
  title: 'Archive/Features/Package/PackageContents',
  component: PackageContents,
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof PackageContents>;

export const Basic: Story = {
  args: {},
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};
