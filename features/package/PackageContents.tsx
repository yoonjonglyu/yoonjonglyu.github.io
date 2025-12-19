'use client';
import  { type FC } from 'react';
import styled from 'styled-components';
import { notFound } from 'next/navigation';
import { allPackages } from '@contentlayer/generated';

import ContentsCard from '../../components/molecules/ContentsCard';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 18px;
  margin: 24px 3px;
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`;
const ContentsArea = styled.section`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: hidden;
`;

export interface PackageContentsProps {
  params: {
    slug: string;
  };
}
const PackageContents: FC<PackageContentsProps> = ({ params }) => {
  const packageInfo = allPackages.find((p) => p.slug === params.slug);

  if (!packageInfo) return notFound();

  return (
    <Container>
      <ContentsArea>
        <ContentsCard header={<h2>PackageProject</h2>} contents={packageInfo.body.code} />
      </ContentsArea>
    </Container>
  );
};

export default PackageContents;
