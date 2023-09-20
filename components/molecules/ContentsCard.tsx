import React from 'react';
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

export interface ContentsCardProps {
  header: React.ReactNode;
  contents: string;
  headerProps?: typeof ContentsHeader;
  bodyProps?: typeof ContentsBody;
}

const ContentsCard: React.FC<ContentsCardProps> = ({
  header,
  contents,
  headerProps,
  bodyProps,
}) => {
  return (
    <Card
      css={`
        flex: 1;
        min-height: 600px;
        overflow: hidden;
      `}>
      <ContentsHeader {...headerProps}>{header}</ContentsHeader>
      <ContentsBody
        dangerouslySetInnerHTML={{
          __html: contents,
        }}
        {...bodyProps}
      />
    </Card>
  );
};

export default ContentsCard;
