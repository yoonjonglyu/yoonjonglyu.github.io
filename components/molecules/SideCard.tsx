'use client';
import React from 'react';
import styled, { CSSProp } from 'styled-components';

import Card from '../atoms/Card';

const CardHeader = styled.div`
  height: 32px;
  border-bottom: 1px dashed var(--color-background-space);
  & h3 {
    font-size: 14px;
    font-weight: 500;
  }
`;
const CardContents = styled.div`
  padding: 12px;
  font-size: 12px;
  & ul,
  ol {
    margin: 6px;
    padding: 0px;
  }
`;
/**
 * swc 에서 css라는 props를 아직 지원 안해줘서 못받는다 ㅋㅋ;
 * 자료 수집결과 swc와 ssr 관련한 이슈로 추정된다.
 * use client 컴포넌트에서 props시 가능함
 * 범용성을 위해서는 props에서 css라는 단어를 안쓰는게 맞는듯
 */
export interface SideCardProps {
  header: React.ReactNode;
  contents?: React.ReactNode;
  cssText?: CSSProp;
}

const SideCard: React.FC<SideCardProps> = ({ header, contents, cssText }) => {
  return (
    <Card
      css={`
        & a:hover {
          text-decoration: underline;
          color: var(--color-point);
        }
        ${cssText}
      `}>
      <CardHeader>{header}</CardHeader>
      <CardContents>{contents}</CardContents>
    </Card>
  );
};

export default SideCard;
