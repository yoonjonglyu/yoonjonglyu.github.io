import { Metadata } from 'next';

import ToyList from '../../features/toy/ToyList';

export const metadata: Metadata = {
  title: 'toy',
  description: 'toy',
};

export default function ToyPage() {
  return (
      <ToyList />
  );
}
