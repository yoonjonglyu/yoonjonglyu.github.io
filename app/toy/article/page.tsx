import { Metadata } from 'next';

import ToyArticle from '../../../features/toy/ToyArticle';

export const metadata: Metadata = {
  title: 'toy-Article',
  description: 'toy-article',
};

export default function ToyArticlePage() {
  return <ToyArticle />;
}
