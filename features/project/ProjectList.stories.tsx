import type { Meta, StoryObj } from '@storybook/react';

import ProjectList from './ProjectList';

const meta: Meta<typeof ProjectList> = {
  title: 'Archive/Features/Project/ProjectList',
  component: ProjectList,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ProjectList>;

export const Basic: Story = {
  args: {},
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};
