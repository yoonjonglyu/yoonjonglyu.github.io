'use client';
import React from 'react';
import styled from 'styled-components';
import { getQuery } from 'isa-util';

import ContentsCard from '../../components/molecules/ContentsCard';
import SnippetSide from './SnippetSide';

import useSnippetContents from '../../hooks/snippet/useSnippetContents';

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
  const index = window === undefined ? 0 : parseInt(getQuery().get('post'));
  const { data } = useSnippetContents(index);

  return (
    <Container>
      <ContentsArea>
        <ContentsCard
          header={<h2>Snippet</h2>}
          contents={data}
        />
      </ContentsArea>
      <SnippetSide />
    </Container>
  );
};

export default SnippetContents;
