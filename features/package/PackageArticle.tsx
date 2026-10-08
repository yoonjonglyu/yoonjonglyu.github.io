'use client';
import { type FC } from 'react';
import styled from 'styled-components';
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

export interface PackageArticleProps {
  title?: string;
  content?: string;
  repository?: string;
  homepage?: string;
  translations?: Record<string, { title: string; content: string }>;
}
const PackageArticle: FC<PackageArticleProps> = (props) => {
  const { t, locale } = useTranslation();

  const localized =
    props.translations?.[locale] ??
    props.translations?.en ??
    (props.translations ? Object.values(props.translations)[0] : undefined);

  const activeTitle = localized?.title ?? props.title ?? 'package';
  const activeContent = localized?.content ?? props.content ?? '';

  return (
    <Container>
      <ArticleArea>
        <ContentsCard header={activeTitle} contents={activeContent} />
        <ArticleLinkConainer>
          <Link href='/archive' style={{ textDecoration: 'none' }}>
            {t.archive.backToArchive}
          </Link>
          {props.repository && (
            <Link
              href={props.repository}
              style={{ textDecoration: 'none' }}
              target='_blank'
              rel='noopener noreferrer'>
              {t.archive.github}
            </Link>
          )}
          {props.homepage && (
            <Link
              href={props.homepage}
              style={{ textDecoration: 'none' }}
              target='_blank'
              rel='noopener noreferrer'>
              {t.archive.npm}
            </Link>
          )}
        </ArticleLinkConainer>
      </ArticleArea>
    </Container>
  );
};

export default PackageArticle;
