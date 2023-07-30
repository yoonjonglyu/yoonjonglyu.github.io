import React from 'react';
import styled from 'styled-components';

import Card from '../../components/atoms/Card';
import WCarousel from '../../components/organisms/WCarousel';

export interface HomeShelfProps {}

const HomeShelf: React.FC<HomeShelfProps> = () => {
  return (
    <Card
      css={`
        min-height: 300px;
        @media (max-width: 1024px) {
          min-height: 300px;
        }
      `}>
      <WCarousel
        items={[111, 222, 333, 444, 555, 666]}
        carouselHeight='300px'
      />
    </Card>
  );
};

export default HomeShelf;
