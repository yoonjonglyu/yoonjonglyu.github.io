import { Metadata } from 'next';

import WorkList from '@features/work/WorkList';

export const metadata: Metadata = {
  title: 'ISA Archive - Work',
  description: 'about Work',
  keywords: [
    'devlop',
    'ISA',
    'frontend',
    'archive',
    '개발',
    '프론트엔드',
    'react',
    'work',
    'project',
    'package',
  ],
  openGraph: {
    images: [`/api/og?title=Work`]
  },
};
export default function WorkPage() {
  return <WorkList />;
}
