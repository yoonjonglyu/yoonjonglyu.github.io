import { Metadata } from 'next';
import { allProjects } from '@contentlayer/generated';

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
export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}
export default async function ProjectArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const param = await params;
  return <ProjectArticle params={param} />;
}
