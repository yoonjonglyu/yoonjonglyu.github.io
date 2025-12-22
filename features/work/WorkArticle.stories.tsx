import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import WorkArticle from './WorkArticle';

const meta: Meta<typeof WorkArticle> = {
  title: 'Archive/Features/Work/WorkArticle',
  component: WorkArticle,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof WorkArticle>;

export const Basic: Story = {
  args: {
    title: 'Sample Work Article',
    content:
      'splitMdxSections 함수를 사용하여 섹션을 나누는 예시입니다.\n\n---\n\n첫 번째 섹션 내용입니다.\n\n---\n\n두 번째 섹션 내용입니다.',
  },
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};
