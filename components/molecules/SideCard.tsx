'use client';
import React from 'react';
import styled from 'styled-components';

import Card from '../atoms/Card';

const CardHeader = styled.div`
  height: 30px;
  border-bottom: 1px dashed var(--color-background-space);
  h3 {
    font-size: 14px;
    font-weight: 500;
  }
  a:hover {
    text-decoration: underline;
  }
`;
const CardContents = styled.div`
  font-size: 12px;
  a:hover {
    text-decoration: underline;
    color: var(--color-point);
  }
`;

export interface SideCardProps {
  header?: React.ReactNode;
  contents?: React.ReactNode;
}

const SideCard: React.FC<SideCardProps> = ({ header, contents }) => {
  return (
    <Card>
      <CardHeader>{header}</CardHeader>
      <CardContents>{contents}</CardContents>
    </Card>
  );
};

export default SideCard;
