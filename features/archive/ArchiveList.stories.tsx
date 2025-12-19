import type { Meta, StoryObj } from '@storybook/react';


import ArchiveList from './ArchiveList';

const meta = {
  title: 'Archive/Features/Archive/ArchiveList',
  component: ArchiveList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ArchiveList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    archives: [
      {
        id: '1',
        title: 'January 2024',
        count: 5,
        url: '/archive/2024-01',
      },
      {
        id: '2',
        title: 'December 2023',
        count: 8,
        url: '/archive/2023-12',
      },
      {
        id: '3',
        title: 'November 2023',
        count: 3,
        url: '/archive/2023-11',
      },
    ],
  },
};
