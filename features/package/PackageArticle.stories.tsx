import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import PackageArticle from './PackageArticle';

const meta: Meta<typeof PackageArticle> = {
  title: 'Archive/Features/Package/PackageArticle',
  component: PackageArticle,
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof PackageArticle>;

export const Basic: Story = {
  args: {
    title: 'Sample Package Article',
    content: 'This is a sample content for the package.',
    repository: 'https://github.com/example/sample-package',
    homepage: 'https://example.com/sample-package',
  },
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};
