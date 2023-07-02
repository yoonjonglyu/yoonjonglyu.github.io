'use client';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div<{css: string}>`
  min-height: 200px;
  background: var(--color-background-card);
  border-radius: 12px;
  ${({css}) => `${css}`}
`;

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  css: string
}

const Card: React.FC<CardProps> = (props) => {
  return <Container {...props} />;
};

export default Card;
