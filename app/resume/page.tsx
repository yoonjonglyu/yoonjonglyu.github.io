import { Metadata } from 'next';

import Resume from '@features/resume/Resume';

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
    'package',
  ],
  openGraph: {
    images: [`/api/og?title=Archive`]
  },
};
export default function ResumePage() {
  return <Resume />;
}
