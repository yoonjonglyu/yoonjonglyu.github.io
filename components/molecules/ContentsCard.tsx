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
