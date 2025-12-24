import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import PackageArticle from '@features/package/PackageArticle';

const meta: Meta<typeof PackageArticle> = {
  title: 'Archive/Page/Package/Article',
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
    repository: 'https://github.com/example/repo',
    homepage: 'https://www.npmjs.com/package/example-package',
  },
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};
