import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import ProjectArticlePage from './page';

const meta: Meta<typeof ProjectArticlePage> = {
  title: 'Archive/Page/Project/Article',
  component: ProjectArticlePage,
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof ProjectArticlePage>;

export const Basic: Story = {
  args: {
    params: { slug: 'memo' },
  },
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};
