import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import ResumeSkill from './ResumeSkill';

const meta: Meta<typeof ResumeSkill> = {
  title: 'Archive/Features/Resume/ResumeSkill',
  component: ResumeSkill,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ResumeSkill>;

export const Basic: Story = {
  args: {},
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};
