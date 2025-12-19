import { Metadata } from 'next';

import ProjectList from '@features/project/ProjectList';

export const metadata: Metadata = {
  title: 'ISA Archive - Project',
  description: 'about project',
  keywords: [
    'devlop',
    'ISA',
    'frontend',
    'archive',
    '개발',
    '프론트엔드',
    'react',
    'project',
  ],
  openGraph: {
    images: [`/api/og?title=Project`]
  },
};

export default function ProjectPage() {
  return <ProjectList />;
}
