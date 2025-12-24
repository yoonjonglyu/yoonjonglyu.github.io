'use client';
import React from 'react';
import styled from 'styled-components';
import Card from '@components/atoms/Card';
import { Mdx } from '@components/mdx';

// 헤더 디자인 개선: 그라데이션 포인트 라인
const ContentsHeader = styled.div`
  margin-bottom: 24px;
  padding: 12px 4px;
  border-bottom: 2px solid transparent;
  border-image: linear-gradient(to right, var(--color-point), transparent) 1;

  & h2,
  & h3 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    letter-spacing: -0.5px;
  }
`;

const ContentsBody = styled.div`
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.7;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #fff;
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  /* MDX 내부의 링크 강조 */
  a {
    color: var(--color-point);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  hr {
    border: 0;
    height: 1px;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    margin: 40px 0;
  }

  iframe {
    width: 100%;
    min-height: 500px;
    background: #000;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    margin: 20px 0;
  }

  /* 코드 블록 디자인 고도화 (다크 테마) */
  pre {
    background: #161b22;
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    padding: 20px;
    margin: 24px 0;
    overflow-x: auto;
    font-family: 'Fira Code', monospace;
    font-size: 0.95em;
    color: #e6edf3;
  }

  /* Syntax Highlighting (GitHub Dark 스타일 테마 적용) */
  .pl-k {
    color: #ff7b72;
  } /* 키워드 */
  .pl-v {
    color: #ffa657;
  } /* 변수 */
  .pl-en {
    color: #d2a8ff;
  } /* 함수 */
  .pl-ent {
    color: #7ee787;
  } /* 태그 */
  .pl-c1,
  .pl-s {
    color: #a5d6ff;
  } /* 문자열, 숫자 */
  .pl-c {
    color: #8b949e;
  } /* 주석 */
`;

export interface ContentsCardProps {
  header: React.ReactNode;
  contents: string;
  CSS?: string;
}

const ContentsCard: React.FC<ContentsCardProps> = ({
  header,
  contents,
  CSS,
}) => {
  const isStorybook =
    typeof window !== 'undefined' &&
    (window as any).__STORYBOOK_PREVIEW__ !== undefined;
  

  return (
    <Card
      css={`
        flex: 1;
        min-height: 600px;
        padding: 40px; /* 내부 여백 확장 */
        background: rgba(255, 255, 255, 0.02);
        backdrop-filter: blur(20px);
        @media (max-width: 768px) {
          padding: 16px;
        }
        ${CSS}
      `}>
      <ContentsHeader>{header}</ContentsHeader>
      <ContentsBody>
        {isStorybook ? (
          <PreviewMode code={contents} />
        ) : (
          <Mdx code={contents} />
        )}
      </ContentsBody>
    </Card>
  );
};

export default ContentsCard;

const PreviewMode = ({ code }: { code: string }) => (
  <div style={{ opacity: 0.5, fontStyle: 'italic' }}>
    [Preview Mode]: {code}...
  </div>
);
