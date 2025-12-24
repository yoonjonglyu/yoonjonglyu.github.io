'use client';
import { FC } from 'react';
import styled from 'styled-components';

import ContentsCard from '@components/molecules/ContentsCard';

const Container = styled.article`
  display: flex;
  justify-content: center;
  margin: 24px 3px 80px;
`;

const ArticleArea = styled.section`
  width: 100%;
  max-width: 820px;
  display: flex;
  flex-direction: column;
  gap: 64px;
`;

export interface WorkArticleProps {
  title?: string;
  content?: string;
}

const WorkArticle: FC<WorkArticleProps> = ({ title, content }) => {
  const sections = splitMdxSections(content);

  return (
    <Container>
      <ArticleArea>
        {sections.map((section, index) => (
          <ContentsCard
            key={index}
            header={index === 0 ? title : null}
            contents={section}
          />
        ))}
      </ArticleArea>
    </Container>
  );
};

export default WorkArticle;

function splitMdxSections(code: string) {
  return code
    .split('\n---\n')
    .map((section) => section.trim())
    .filter(Boolean);
}
