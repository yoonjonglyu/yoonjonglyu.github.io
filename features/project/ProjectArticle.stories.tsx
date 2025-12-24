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
  args: {
    title: 'Sample Project Article',
    content: 'This is a sample content for the project.',
    repository: 'https://github.com/example/repo',
    homepage: 'https://www.npmjs.com/package/example-package',
  },
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};
