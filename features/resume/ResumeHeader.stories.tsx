import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import ResumeHeader from './ResumeHeader';

const meta: Meta<typeof ResumeHeader> = {
  title: 'Archive/Features/Resume/ResumeHeader',
  component: ResumeHeader,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ResumeHeader>;

export const Basic: Story = {
  args: {},
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};
