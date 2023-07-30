'use client';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Swipe from 'react-custom-swipe';
import { getQuery } from 'isa-util';

const CarouselContainer = styled.div`
  position: relative;
  border: 0.8px dashed var(--color-point);
`;
const CarouselItemBox = styled.div<{ carouselheight?: string }>`
  width: 100%;
  min-height: ${({ carouselheight }) =>
    carouselheight !== undefined ? carouselheight : '300px'};
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
  carouselHeight?: string;
}

const WCarousel: React.FC<WCarouselProps> = ({ items, carouselHeight }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleCurrentIndex = (value: number) => {
    setCurrentIndex(value);
  };

  useEffect(() => {
    const index = getQuery().get('index');
    handleCurrentIndex(index !== null ? parseInt(index) : 0);
  }, []);

  return (
    <CarouselContainer>
      <Swipe
        item={items.map((item, index) => (
          <CarouselItemBox key={index} carouselheight={carouselHeight}>
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
