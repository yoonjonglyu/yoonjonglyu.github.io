import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import TextItem from './TextItem';

const meta: Meta<typeof TextItem> = {
  title: 'Archive/Ui/Molecules/TextItem',
  component: TextItem,
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof TextItem>;

export const Basic: Story = {
  args: {
    index: 1,
    title: '제목',
    description: '설명',
    stacks: ['React', 'TypeScript'],
  }
};
