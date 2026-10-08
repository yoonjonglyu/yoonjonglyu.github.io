import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import LanguageSwitcher from './LanguageSwitcher';
import ConfigureStore from '../../store';

const meta: Meta<typeof LanguageSwitcher> = {
  title: 'Archive/Molecules/LanguageSwitcher',
  component: LanguageSwitcher,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ConfigureStore>
        <div style={{ padding: '40px', background: '#0b0e14' }}>
          <Story />
        </div>
      </ConfigureStore>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof LanguageSwitcher>;

export const Default: Story = {};
