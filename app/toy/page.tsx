import { Metadata } from 'next';

import ToyList from '../../features/toy/ToyList';

export const metadata: Metadata = {
  title: 'ISA Archive - Toy',
  description: 'about Toy',
  keywords: [
    'devlop',
    'ISA',
    'frontend',
    'archive',
    '개발',
    '프론트엔드',
    'react',
    'Toy',
  ],
  
};

export default function ToyPage() {
  return (
      <ToyList />
  );
}
