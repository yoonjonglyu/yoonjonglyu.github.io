import { Metadata } from 'next';

import SnippetContents from '../../features/snippet/SnippetContents';

export const metadata: Metadata = {
  title: 'ISA Archive - Snippet',
  description: 'about snippet',
  keywords: [
    'devlop',
    'ISA',
    'frontend',
    'archive',
    '개발',
    '프론트엔드',
    'react',
    'snippet',
  ]
};

export default function SnippetPage() {
  return <SnippetContents />;
}
