import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import PanelCard from './PanelCard';

const meta: Meta<typeof PanelCard> = {
  title: 'Archive/Ui/Molecules/PanelCard',
  component: PanelCard,
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof PanelCard>;

export const Basic: Story = {
  args: {
    href: '/work/memo',
    title: 'Memo — PWA Memo Application',
    summary:
      'Offline-first memo application focused on speed, minimal UI, and ephemeral planning.',
    stacks: ['TypeScript', 'React', 'PWA'],
    thumbnail: { src: '', alt: 'Memo App Screenshot' },
  },
};
