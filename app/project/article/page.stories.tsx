import type { Meta, StoryObj } from '@storybook/react';

import ProjectArticlePage from './page';

const meta: Meta<typeof ProjectArticlePage> = {
  title: 'Archive/Page/Project/article',
  component: ProjectArticlePage,
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof ProjectArticlePage>;

export const Basic: Story = {
  args: {},
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};
