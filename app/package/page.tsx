'use client';
import { Metadata } from 'next';
import styled from 'styled-components';

import PackageContents from '../../features/package/PackageContents';
import PackageSide from '../../features/package/PackageSide';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 18px;
  margin: 24px 3px;
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`;

export const metadata: Metadata = {
  title: 'package',
  description: 'package',
};

export default function PackagePage() {
  return (
    <Container>
      <PackageContents />
      <PackageSide />
    </Container>
  );
}
