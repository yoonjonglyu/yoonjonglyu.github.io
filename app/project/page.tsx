import { Metadata } from 'next';

import ProjectList from '../../features/project/ProjectList';

export const metadata: Metadata = {
  title: 'project',
  description: 'project',
};

export default function ProjectPage() {
  return <ProjectList />;
}
