import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import ResumeFocus from './ResumeFocus';
const meta: Meta<typeof ResumeFocus> = {
  title: 'Archive/Features/Resume/ResumeFocus',
  component: ResumeFocus,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ResumeFocus>;

export const Basic: Story = {
  args: {},
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};
