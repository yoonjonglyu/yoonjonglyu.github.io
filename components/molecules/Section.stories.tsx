import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Section from './Section';

const meta: Meta<typeof Section> = {
  title: 'Archive/Ui/Molecules/Section',
  component: Section,
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Section>;

export const Basic: Story = {
  args: {
    title: '섹션 제목',
    children: <div>섹션 내용</div>,
  },
};
