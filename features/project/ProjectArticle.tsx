'use client';
import { type FC } from 'react';
import { styled } from 'styled-components';
import Link from 'next/link';

import ContentsCard from '@components/molecules/ContentsCard';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 18px;
  margin: 24px 3px;
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`;
const ArticleArea = styled.section`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 3px;
  overflow: hidden;
  & a {
    color: var(--color-rare);
  }
`;
const ArticleLinkConainer = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  gap: 12px;
`;

export interface ProjectArticleProps {
  title: string;
  content: string;
  repository: string;
  homepage: string;
}

const ProjectArticle: FC<ProjectArticleProps> = ({
  title,
  content,
  repository,
  homepage,
}) => {
  return (
    <Container>
      <ArticleArea>
        <ContentsCard header={title} contents={content} />
        <ArticleLinkConainer>
          <Link href='/archive' style={{ textDecoration: 'none' }}>
            ← Back to Archive
          </Link>
          <Link href={repository} style={{ textDecoration: 'none' }} target='_blank' rel='noopener noreferrer'>
            Github
          </Link>
          <Link href={homepage} style={{ textDecoration: 'none' }} target='_blank' rel='noopener noreferrer'>
            NPM
          </Link>
        </ArticleLinkConainer>
      </ArticleArea>
    </Container>
  );
};

export default ProjectArticle;
