import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Img from './Img';

const meta: Meta<typeof Img> = {
  title: 'Archive/Ui/Atoms/Img',
  component: Img,
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Img>;

export const Basic: Story = {
  args: {
    src: 'https://github.com/yoonjonglyu/custom-swipe/raw/main/swipe.png',
    alt: 'image',
    noImage:
      'https://yoonjonglyu.github.io/_next/static/media/noimg.83abd02d.png',
    fill: true,
  },
};
