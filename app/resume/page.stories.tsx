import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import ResumePage from './page';

const meta: Meta<typeof ResumePage> = {
  title: 'Archive/Page/Resume',
  component: ResumePage,
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof ResumePage>;

export const Basic: Story = {
  args: {},
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};
