import type { Meta, StoryObj } from '@storybook/react';

import RootPage from './page';

const meta: Meta<typeof RootPage> = {
  title: 'Archive/Page/Root',
  component: RootPage,
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof RootPage>;

export const Basic: Story = {
  args: {},
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};
