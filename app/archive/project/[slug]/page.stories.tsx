import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import ProjectArticle from '@features/project/ProjectArticle';

const meta: Meta<typeof ProjectArticle> = {
  title: 'Archive/Page/Project/Article',
  component: ProjectArticle,
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof ProjectArticle>;

export const Basic: Story = {
  args: {
    title: 'Sample Project Title',
    content: 'This is a sample content for the project.',
  },
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};
