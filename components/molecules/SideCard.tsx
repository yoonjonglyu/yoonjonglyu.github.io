import React from 'react';
import styled from 'styled-components';

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

export interface SideCardProps {
  header: React.ReactNode;
  contents?: React.ReactNode;
  css?: string;
}

const SideCard: React.FC<SideCardProps> = ({ header, contents, ...props }) => {
  return (
    <Card
      css={`
        & a:hover {
          text-decoration: underline;
          color: var(--color-point);
        }
      `}
      {...props}>
      <CardHeader>{header}</CardHeader>
      <CardContents>{contents}</CardContents>
    </Card>
  );
};

export default SideCard;
