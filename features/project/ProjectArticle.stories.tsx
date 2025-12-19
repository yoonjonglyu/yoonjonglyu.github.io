import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import ProjectArticle from './ProjectArticle';

const meta: Meta<typeof ProjectArticle> = {
  title: 'Archive/Features/Project/ProjectArticle',
  component: ProjectArticle,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ProjectArticle>;

export const Basic: Story = {
  args: {},
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};
