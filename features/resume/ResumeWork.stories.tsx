import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import ResumeWork from './ResumeWork';

const meta: Meta<typeof ResumeWork> = {
  title: 'Archive/Features/Resume/ResumeWork',
  component: ResumeWork,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ResumeWork>;

export const Basic: Story = {
  args: {},
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};
