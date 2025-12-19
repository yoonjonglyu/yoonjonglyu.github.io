import { Metadata } from 'next';

import PackageList from '@features/package/PackageList';

export const metadata: Metadata = {
  title: 'ISA Archive - Package',
  description: 'about Package',
  keywords: [
    'devlop',
    'ISA',
    'frontend',
    'archive',
    '개발',
    '프론트엔드',
    'react',
    'Package',
  ],
    openGraph: {
    images: [`/api/og?title=Package`]
  },
};

export default function PackagePage() {
  return <PackageList />;
}
