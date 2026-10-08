'use client';
import { FC } from 'react';
import styled from 'styled-components';
import { useTranslation } from '@hooks/useTranslation';

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
  line-break: anywhere;
    & img {
    max-width: 100%;
    height: auto;
  }
`;

export interface WorkArticleProps {
  title?: string;
  content?: string;
  translations?: Record<string, { title: string; content: string }>;
}

const WorkArticle: FC<WorkArticleProps> = (props) => {
  const { locale } = useTranslation();

  // translations 맵이 제공된 경우 현재 locale(또는 en fallback) 콘텐츠 자동 채택
  const localized =
    props.translations?.[locale] ??
    props.translations?.en ??
    (props.translations ? Object.values(props.translations)[0] : undefined);

  const activeTitle = localized?.title ?? props.title;
  const activeContent = localized?.content ?? props.content ?? '';

  const isMdxCode =
    typeof activeContent === 'string' &&
    (activeContent.includes('var Component') ||
      activeContent.includes('__mdx_scope__') ||
      activeContent.includes('MDXLayout'));

  // 컴파일된 MDX 번들은 분할하면 구문 오류(SyntaxError)가 발생하므로 단일 렌더링
  if (isMdxCode) {
    return (
      <Container>
        <ArticleArea>
          <ContentsCard header={activeTitle} contents={activeContent} />
        </ArticleArea>
      </Container>
    );
  }

  const sections = splitMdxSections(activeContent);

  return (
    <Container>
      <ArticleArea>
        {sections.length > 0 ? (
          sections.map((section, index) => (
            <ContentsCard
              key={index}
              header={index === 0 ? activeTitle : null}
              contents={section}
            />
          ))
        ) : (
          <ContentsCard header={activeTitle} contents={activeContent} />
        )}
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
