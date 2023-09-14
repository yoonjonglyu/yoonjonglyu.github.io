'use client';
import React from 'react';
import styled from 'styled-components';
import { getQuery } from 'isa-util';

import ContentsCard from '../../components/molecules/ContentsCard';
import PackageSide from './PackageSide';

import usePackageContents from '../../hooks/package/usePackageContents';

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

export interface PackageContentsProps {}

const PackageContents: React.FC = () => {
  const index = window === undefined ? 0 : parseInt(getQuery().get('post'));
  const { data } = usePackageContents(index);

  return (
    <Container>
      <ContentsArea>
        <ContentsCard header={<h2>PackageProject</h2>} contents={data} />
      </ContentsArea>
      <PackageSide />
    </Container>
  );
};

export default PackageContents;
