import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import ProjectPage from './page';

const meta: Meta<typeof ProjectPage> = {
  title: 'Archive/Page/Project',
  component: ProjectPage,
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof ProjectPage>;

export const Basic: Story = {
  args: {},
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};
