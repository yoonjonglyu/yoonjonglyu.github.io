import type { Meta, StoryObj } from '@storybook/react';

import SideCard from './SideCard';

const meta: Meta<typeof SideCard> = {
  title: 'Archive/Ui/Molecules/SideCard',
  component: SideCard,
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof SideCard>;

export const Basic: Story = {
  args: {
    header: (
      <>
        <h3>카테고리 목록</h3>
      </>
    ),
    contents: (
      <ul>
        <li>
          <a>주제1</a>
        </li>
        <li>주제2</li>
        <li>주제3</li>
      </ul>
    ),
  },
};
