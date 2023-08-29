import React from 'react';
import styled, { keyframes } from 'styled-components';

import Card from '../../components/atoms/Card';

const TextBox = styled.div`
  position: absolute;
  top: 25px;
  right: 28px;
  text-align: right;
  z-index: 9999;
`;
const Graffiti = keyframes`
0% {
  text-shadow: 1px 1px 1px var(--color-legend), 0 0 1em blue, 0 0 0.2em var(--color-rare);
}
25% {
  text-shadow: 0.8px 0.8px 1px var(--color-point), 0 0 1em blue, 0 0 0.2em blue;
}
35% {
  text-shadow: 2px 2px 2px var(--color-point), 0 0 1em blue, 0 0 0.2em blue;
}
50% {
  text-shadow: 0.5px 0.5px 2px var(--color-point), 0 0 1em blue, 0 0 0.2em blue;
}
75% {
  text-shadow: 1px 1px 1px var(--color-unique), 0 0 1em blue, 0 0 0.2em blue;
}
100% {
  text-shadow: 1.5px 1.5px 1.5px var(--color-unique), 0 0 1em blue, 0 0 0.2em var(--color-legend);
}
`;
const GraffitiText = styled.p`
  margin: 3px 0;
  font-size: 2rem;
  animation: ${Graffiti} 3s infinite;
`;
const Moon = styled.div`
  position: absolute;
  top: 25px;
  width: 200px;
  height: 200px;
  border-radius: 100%;
  background: linear-gradient(35deg, var(--color-unique), var(--color-point));
  z-index: 999;
`;
const Star = styled.div`
  position: absolute;
  top: 230px;
  width: 125px;
  height: 125px;
  border-radius: 100%;
  background: linear-gradient(35deg, var(--color-legend), var(--color-point));
  z-index: 999;
`;

export interface HomeBannerProps {}

const HomeBanner: React.FC<HomeBannerProps> = () => {
  return (
    <Card
      css={`
        min-height: 400px;
        background: linear-gradient(
          55deg,
          var(--color-point),
          var(--color-legend)
        );
        @media (max-width: 1024px) {
          min-height: 350px;
        }
      `}>
      <TextBox>
        <GraffitiText>Welcome to My Archive</GraffitiText>
        <GraffitiText>from. Devloper ISA</GraffitiText>
      </TextBox>
      <Moon />
      <Star />
    </Card>
  );
};

export default HomeBanner;
