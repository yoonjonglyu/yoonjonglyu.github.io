import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import ReadItem from './ReadItem';

const meta: Meta<typeof ReadItem> = {
  title: 'Archive/Ui/Molecules/ReadItem',
  component: ReadItem,
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof ReadItem>;

export const Basic: Story = {
  args: {
    title: 'Memo — PWA Memo Application',
    sub: 'TypeScript · React · Storybook',
    desc: 'A simple and fast PWA memo application that allows users to create, edit, and delete memos with offline support and seamless synchronization across devices.',
  },
};
