'use client';
import { type FC } from 'react';
import { styled } from 'styled-components';

import ContentsCard from '@components/molecules/ContentsCard';

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

export interface WorkArticleProps {
  title?: string;
  content?: string;
}

const WorkArticle: FC<WorkArticleProps> = ({ title, content }) => {
  return (
    <Container>
      <ArticleArea>
        <ContentsCard header={title} contents={content} />
      </ArticleArea>
    </Container>
  );
};

export default WorkArticle;
