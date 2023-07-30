import React, { useState } from 'react';
import styled from 'styled-components';
import Swipe from 'react-custom-swipe';

const CarouselContainer = styled.div`
  position: relative;
  border: 0.8px dashed var(--color-point);
`;
const CarouselItemBox = styled.div<{ CarouselHeight?: string }>`
  width: 100%;
  min-height: ${({ CarouselHeight }) =>
    CarouselHeight !== undefined ? CarouselHeight : '300px'};
  height: 100%;
`;
const CarouselDot = styled.div`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  & ul {
    display: flex;
    gap: 12px;
    margin: 0;
    list-style: circle;
  }
  & ul li {
    float: left;
  }
  & ul li span {
    font-size: 0;
  }
`;

export interface WCarouselProps {
  items: React.ReactNode[];
  CarouselHeight?: string;
}

const WCarousel: React.FC<WCarouselProps> = ({ items, CarouselHeight }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCurrentIndex = (value: number) => {
    setCurrentIndex(value);
  };

  return (
    <CarouselContainer>
      <Swipe
        item={items.map((item, index) => (
          <CarouselItemBox key={index} CarouselHeight={CarouselHeight}>
            {item}
          </CarouselItemBox>
        ))}
        config={{
          isHistory: false,
          historyCallback: (state) => handleCurrentIndex(state.currentStep),
        }}
      />
      <CarouselDot>
        <ul>
          {items.map((_, index) => (
            <li
              key={index}
              style={{ listStyle: currentIndex === index ? 'disc' : 'circle' }}>
              <span>{index}</span>
            </li>
          ))}
        </ul>
      </CarouselDot>
    </CarouselContainer>
  );
};

export default WCarousel;
