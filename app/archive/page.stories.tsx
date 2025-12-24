import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import ArchivePage from './page';

const meta: Meta<typeof ArchivePage> = {
  title: 'Archive/Page/Archive',
  component: ArchivePage,
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof ArchivePage>;

export const Basic: Story = {
  args: {},
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};
