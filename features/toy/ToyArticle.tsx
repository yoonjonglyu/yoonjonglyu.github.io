'use client';
import React from 'react';
import { styled } from 'styled-components';
import { getQuery } from 'isa-util';

import ContentsCard from '../../components/molecules/ContentsCard';

import useToyContents from '../../hooks/toy/useToyContents';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 24px 3px;
`;
const ArticleArea = styled.section`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  overflow: hidden;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

export interface ToyArticleProps {}

const ToyArticle: React.FC<ToyArticleProps> = () => {
  const index = window === undefined ? 0 : parseInt(getQuery().get('post'));
  const { data } = useToyContents(index);

  return (
    <Container>
      <ArticleArea>
        <ContentsCard header={'project article'} contents={data} />
      </ArticleArea>
    </Container>
  );
};

export default ToyArticle;
