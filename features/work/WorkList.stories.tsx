import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import WorkList from './WorkList';

const meta = {
  title: 'Archive/Features/Work/WorkList',
  component: WorkList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof WorkList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    works: [
      {
        href: '/work/memo',
        title: 'Memo — PWA Memo Application',
        summary:
          'Offline-first memo application focused on speed, minimal UI, and ephemeral planning.',
        stacks: ['TypeScript', 'React', 'PWA'],
        thumbnail: { src: '', alt: 'Memo App Screenshot' },
      },
      {
        href: '/work/portfolio',
        title: 'Portfolio Website',
        summary:
          'A personal portfolio website showcasing projects and skills using modern web technologies.',
        stacks: ['Next.js', 'Styled-Components', 'Vercel'],
        thumbnail: { src: '', alt: 'Portfolio Screenshot' },
      },
    ],
  },
};
