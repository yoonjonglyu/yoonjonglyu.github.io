import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import PackageContents from '@features/package/PackageContents';
const meta: Meta<typeof PackageContents> = {
  title: 'Archive/Page/Package/Article',
  component: PackageContents,
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof PackageContents>;

export const Basic: Story = {
  args: {
    content: 'This is a sample content for the package.',
  },
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};
