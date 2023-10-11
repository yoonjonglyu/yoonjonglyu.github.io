import { Metadata } from 'next';

import ProjectArticle from '../../../features/project/ProjectArticle';

export const metadata: Metadata = {
  title: 'ISA Archive - Project Article',
  description: 'about project Article',
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
};

export default function ProjectArticlePage() {
  return <ProjectArticle />;
}
