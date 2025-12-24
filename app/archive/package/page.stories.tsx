import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import PackagePage from './page';

const meta: Meta<typeof PackagePage> = {
  title: 'Archive/Page/Package',
  component: PackagePage,
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof PackagePage>;

export const Basic: Story = {
  args: {},
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};
