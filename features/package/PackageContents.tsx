'use client';
import { type FC } from 'react';
import styled from 'styled-components';

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
  content?: string;
}
const PackageContents: FC<PackageContentsProps> = ({ content }) => {


  return (
    <Container>
      <ContentsArea>
        <ContentsCard
          header={<h2>PackageProject</h2>}
          contents={content}
        />
      </ContentsArea>
    </Container>
  );
};

export default PackageContents;
