import { type FC } from 'react';
import ReadItem from '@components/molecules/ReadItem';

const ResumeFocus: FC = () => (
  <ReadItem
    desc={`UI Architect and Frontend Engineer focused on designing scalable, reusable UI systems.

• Architects component-based design systems using TypeScript, React, and Storybook
• Structures frontend codebases for long-term maintainability in solo or small-team environments
• Experienced in PWA and offline-first applications with performance-conscious UI design

Comfortable owning frontend architecture end-to-end in remote and freelance contexts.`}
    highlight={[
      'UI Architect',
      'Frontend Engineer',
      'TypeScript',
      'React',
      'Storybook',
      'PWA',
      'offline-first',
    ]}
  />
);

export default ResumeFocus;
