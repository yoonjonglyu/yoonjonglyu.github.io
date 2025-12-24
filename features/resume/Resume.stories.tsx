import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Resume from './Resume';

const meta: Meta<typeof Resume> = {
  title: 'Archive/Features/Resume/Resume',
  component: Resume,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Resume>;

export const Basic: Story = {
  args: {},
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};
