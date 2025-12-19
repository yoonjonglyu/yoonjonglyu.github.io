import { Metadata } from 'next';
import { allPackages } from '@contentlayer/generated';

import PackageContents from '@features/package/PackageContents';

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
  return allPackages.map((project) => ({
    slug: project.slug,
  }));
}
export default async function PackageArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const param = await params;
  return <PackageContents params={param} />;
}
