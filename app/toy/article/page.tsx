import { Metadata } from 'next';

import ToyArticle from '../../../features/toy/ToyArticle';

export const metadata: Metadata = {
  title: 'ISA Archive - Toy Article',
  description: 'about toy Article',
  keywords: [
    'devlop',
    'ISA',
    'frontend',
    'archive',
    '개발',
    '프론트엔드',
    'react',
    'toy',
  ],
};

export default function ToyArticlePage() {
  return <ToyArticle />;
}
