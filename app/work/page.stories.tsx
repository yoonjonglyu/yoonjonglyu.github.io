import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import WorkPage from './page';

const meta: Meta<typeof WorkPage> = {
  title: 'Archive/Page/Work',
  component: WorkPage,
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof WorkPage>;

export const Basic: Story = {
  args: {},
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};
