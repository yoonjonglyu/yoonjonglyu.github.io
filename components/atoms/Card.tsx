'use client';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid red;
`;

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {

}

const Card: React.FC<CardProps> = (props) => {
  return <Container {...props} />;
};

export default Card;
