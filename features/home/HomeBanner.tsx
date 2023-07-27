import React from 'react';
import styled, { keyframes } from 'styled-components';

import Card from '../../components/atoms/Card';

const Graffiti = keyframes`
0 {
  text-shadow: 2px 2px 2px tomato, 0 0 1em blue, 0 0 0.2em red;
}
50% {
  text-shadow: 0.5px 0.5px 2px orange, 0 0 1em blue, 0 0 0.2em blue;
}
100% {
  text-shadow: 2px 2px 2px red, 0 0 1em blue, 0 0 0.2em blue;
}
`;
const GraffitiText = styled.div`
  font-size: 2rem;
  animation: ${Graffiti} 1s infinite;
`;
const Ice = styled.div`
  width: 200px;
  height: 200px;
  background: blue;
  border-radius: 100%;
`;

export interface HomeBannerProps {}

const HomeBanner: React.FC<HomeBannerProps> = () => {
  return (
    <Card
      css={`
        min-height: 400px;
      `}>
      <GraffitiText>Welcome to My Archive.</GraffitiText>
      <GraffitiText>...</GraffitiText>
      <GraffitiText>...</GraffitiText>
      <Ice />
    </Card>
  );
};

export default HomeBanner;
