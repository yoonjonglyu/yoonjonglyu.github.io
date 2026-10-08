'use client';
import { type FC } from 'react';
import { styled } from 'styled-components';
import Link from 'next/link';

import ContentsCard from '@components/molecules/ContentsCard';
import { useTranslation } from '@hooks/useTranslation';

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
  line-break: anywhere;
  & a {
    color: var(--color-rare);
  }
  & img {
    max-width: 100%;
    height: auto;
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
  translations?: Record<string, { title: string; content: string }>;
}

const ProjectArticle: FC<ProjectArticleProps> = ({
  title,
  content,
  repository,
  homepage,
  translations,
}) => {
  const { t, locale } = useTranslation();

  const activeDoc = translations?.[locale] || translations?.['en'] || { title, content };

  return (
    <Container>
      <ArticleArea>
        <ContentsCard header={activeDoc.title} contents={activeDoc.content} />
        <ArticleLinkConainer>
          <Link href='/archive' style={{ textDecoration: 'none' }}>
            {t.archive.backToArchive}
          </Link>
          <Link
            href={repository}
            style={{ textDecoration: 'none' }}
            target='_blank'
            rel='noopener noreferrer'>
            {t.archive.github}
          </Link>
          <Link
            href={homepage}
            style={{ textDecoration: 'none' }}
            target='_blank'
            rel='noopener noreferrer'>
            {t.archive.website}
          </Link>
        </ArticleLinkConainer>
      </ArticleArea>
    </Container>
  );
};

export default ProjectArticle;
