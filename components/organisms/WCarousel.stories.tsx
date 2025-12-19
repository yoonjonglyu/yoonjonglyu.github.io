import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import WCarousel from './WCarousel';

import Card from '../atoms/Card';

const meta: Meta<typeof WCarousel> = {
  title: 'Archive/Ui/Organisms/WCarousel',
  component: WCarousel,
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof WCarousel>;

export const Basic: Story = {
  args: {
    items: [<div>11</div>, 22, 33],
  },
  decorators: [
    (Story) => {
      return (
        <Card
          css={`
            min-height: 300px;
          `}>
          <Story />
        </Card>
      );
    },
  ],
};
