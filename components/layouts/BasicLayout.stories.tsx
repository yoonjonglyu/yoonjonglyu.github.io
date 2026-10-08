import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import BasicLayout from './BasicLayout';
import ConfigureStore from '../../store';

const meta: Meta<typeof BasicLayout> = {
  title: 'Archive/Ui/Layouts/BasicLayout',
  component: BasicLayout,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    (Story) => (
      <ConfigureStore>
        <Story />
      </ConfigureStore>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof BasicLayout>;

export const Basic: Story = {
  args: {
  },
};