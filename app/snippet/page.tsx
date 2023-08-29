import { Metadata } from 'next';

import SnippetContents from '../../features/snippet/SnippetContents';

export const metadata: Metadata = {
  title: 'snippet',
  description: 'snippet',
};

export default function SnippetPage() {
  return <SnippetContents />;
}
