import { Metadata } from 'next';

import ProjectArticle from '../../../features/project/ProjectArticle';

export const metadata: Metadata = {
  title: 'project-Article',
  description: 'project-article',
};

export default function ProjectArticlePage() {
  return <ProjectArticle />;
}
