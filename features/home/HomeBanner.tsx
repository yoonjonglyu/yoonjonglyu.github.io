'use client';
import { type FC } from 'react';
import styled, { keyframes } from 'styled-components';

import Card from '@components/atoms/Card';

const TextBox = styled.div`
  position: absolute;
  top: 32px;
  right: 32px;
  text-align: right;
  z-index: 10;
  max-width: 420px;
`;

const Graffiti = keyframes`
  0% { text-shadow: 1px 1px 1px var(--color-legend); }
  50% { text-shadow: 2px 2px 6px var(--color-point); }
  100% { text-shadow: 1px 1px 1px var(--color-legend); }
`;

const Title = styled.h2`
  margin: 0;
  font-size: 2rem;
  font-weight: 600;
  animation: ${Graffiti} 4s ease-in-out infinite;
`;

const SubTitle = styled.p`
  margin-top: 12px;
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
`;

const Moon = styled.div`
  position: absolute;
  top: 40px;
  left: 32px;
  width: 160px;
  height: 160px;
  border-radius: 100%;
  background: linear-gradient(35deg, var(--color-unique), var(--color-point));
  opacity: 0.85;
`;

const Star = styled.div`
  position: absolute;
  top: 220px;
  left: 140px;
  width: 90px;
  height: 90px;
  border-radius: 100%;
  background: linear-gradient(35deg, var(--color-legend), var(--color-point));
  opacity: 0.7;
`;

const HomeBanner: FC = () => {
  return (
    <Card
      css={`
        position: relative;
        min-height: 400px;
        padding: 32px;
        background: linear-gradient(
          55deg,
          var(--color-point),
          var(--color-legend)
        );

        @media (max-width: 1024px) {
          min-height: 320px;
        }
      `}>
      <TextBox>
        <Title>Designing Scalable UI Systems</Title>
        <SubTitle>
          UI Architect & Frontend Engineer.
          <br />
          Exploring reusable components, design systems, and real-world web
          applications.
        </SubTitle>
      </TextBox>

      <Moon />
      <Star />
    </Card>
  );
};

export default HomeBanner;
