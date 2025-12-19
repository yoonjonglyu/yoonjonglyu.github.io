import React, { useMemo } from 'react';
import styled from 'styled-components';

import Card from '../atoms/Card';

const ContentsHeader = styled.div`
  margin: 3px;
  padding: 8px 3px;
  border-bottom: 1px solid red;
  color: var(--color-legend);
`;
const ContentsBody = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--color-rare);
  }
  hr {
    border-color: var(--color-unique);
  }
  iframe {
    width: 100%;
    min-height: 600px;
    background: #fff;
  }
  pre {
    color: #000;
    margin-top: 0;
    margin-bottom: 24px;
    padding: 12px;
    font-size: 1em;
    background: #f7f7f7;
    border-radius: 2;
    overflow-x: auto;
  }
  .pl-k {
    color: #d73a49;
  }
  .pl-v {
    color: #e36209;
  }
  .pl-en {
    color: #6f42c1;
  }
  .pl-ent {
    color: #22863a;
  }
  .pl-c1,
  .pl-s,
  .pl-v {
    color: #005cc5;
  }
`;


// Storybook 환경인지 확인
const isStorybook =
  process.env.STORYBOOK === 'true' ||
  (typeof window !== 'undefined' && window.location.href.includes('6006'));

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
  const MdxComponent = useMemo(() => {
    if (isStorybook) {
      // 스토리북용 가짜 컴포넌트 즉시 반환
      return ({ code }: { code: string }) => (
        <div style={{ padding: '10px', border: '1px dashed #ccc' }}>
          [Storybook Mdx Mock]: {code}
        </div>
      );
    } else {
      // 실제 환경에서만 에러 유발 모듈을 require로 불러옴
      // 이 로직은 스토리북 브라우저에서는 실행되지 않음
      const { Mdx } = require('@components/mdx');
      return Mdx({ code: contents });
    }
  }, [contents]);
  
  return (
    <Card
      css={`
        flex: 1;
        min-height: 600px;
        overflow: hidden;
        ${CSS}
      `}>
      <ContentsHeader>{header}</ContentsHeader>
      <ContentsBody>
        <MdxComponent code={contents} />
      </ContentsBody>
    </Card>
  );
};

export default ContentsCard;
