import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import ResumeFooter from './ResumeFooter';

const meta: Meta<typeof ResumeFooter> = {
  title: 'Archive/Features/Resume/ResumeFooter',
  component: ResumeFooter,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ResumeFooter>;

export const Basic: Story = {
  args: {},
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};
