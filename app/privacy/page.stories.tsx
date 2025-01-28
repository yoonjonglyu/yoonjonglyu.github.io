import type { Meta, StoryObj } from '@storybook/react';

import PrivacyPage from './page';

const meta: Meta<typeof PrivacyPage> = {
  title: 'Archive/Page/Privacy',
  component: PrivacyPage,
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof PrivacyPage>;

export const Basic: Story = {
  args: {},
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};
