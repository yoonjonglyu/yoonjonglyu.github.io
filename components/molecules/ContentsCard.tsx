import React from 'react';
import styled from 'styled-components';

import Card from '../atoms/Card';

const ContentsHeader = styled.div`
  margin: 3px;
  padding: 12px 3px;
  border-bottom: 1px solid red;
`;
const ContentsBody = styled.div``;

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
