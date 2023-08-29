'use client'
import React from 'react';
import styled from 'styled-components';

import ContentsCard from '../../components/molecules/ContentsCard';
import SnippetSide from './SnippetSide';

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

export interface SnippetContentsProps {}

const SnippetContents: React.FC = () => {
  return (
    <Container>
      <ContentsArea>
        <ContentsCard
          header={<h2>Snippet</h2>}
          contents={`여기 내용물을 api 콜하는 방식으로 할지 프레임으로 할지 아직 미정`}
        />
      </ContentsArea>
      <SnippetSide />
    </Container>
  );
};

export default SnippetContents;
