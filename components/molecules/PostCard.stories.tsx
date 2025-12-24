import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import PostCard from './PostCard';

const meta: Meta<typeof PostCard> = {
  title: 'Archive/Ui/Molecules/PostCard',
  component: PostCard,
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof PostCard>;

export const Basic: Story = {
  args: {
    thumnail: { src: undefined, alt: 'ss' },
    title: '포스트 카드',
    description: '포스트 카드 설명 입니다.',
    href: '?post=1',
  },
};
