'use client';
import React, { useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import Swipe from 'react-custom-swipe';
import { getQuery } from 'isa-util';

const CarouselContainer = styled.div`
  position: relative;
  z-index: 10000;
  width: 100%;
  overflow: hidden;
  /* 부모 레이아웃과의 조화를 위해 약간의 보더 추가 가능 */
  border-radius: 16px;
`;

const CarouselItemBox = styled.div<{ $carouselheight?: string }>`
  width: 100%;
  min-height: ${({ $carouselheight }) => $carouselheight ?? '300px'};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CarouselDot = styled.ul`
  position: absolute;
  bottom: 16px;
  left: 50%;
  z-index: 10;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0;
  padding: 8px 16px;
  list-style: none;

  /* 테마에 맞춘 유리 질감 배경 추가 */
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  & li {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 0 0 rgba(var(--color-point-rgb), 0);
  }
  @media screen and (max-width: 1024px) {
    bottom: 0;
  }
`;

export interface WCarouselProps {
  items: React.ReactNode[];
  carouselHeight?: string;
}

const WCarousel: React.FC<WCarouselProps> = ({ items, carouselHeight }) => {
  const DotsRef = useRef<HTMLUListElement>(null);

  // 인디케이터 애니메이션 최적화
  const handleDot = useCallback((index: number) => {
    if (!DotsRef.current) return;

    requestAnimationFrame(() => {
      DotsRef.current?.childNodes.forEach((node, idx) => {
        const element = node as HTMLElement;
        if (!element.style) return;

        const isActive = index === idx;

        // 하이테크 테마: 활성화 시 길어지면서 네온 글로우 효과
        element.style.width = isActive ? '20px' : '6px';
        element.style.borderRadius = isActive ? '4px' : '50%';
        element.style.background = isActive
          ? 'var(--color-point)'
          : 'rgba(255, 255, 255, 0.2)';
        element.style.boxShadow = isActive
          ? '0 0 10px var(--color-point)'
          : 'none';
      });
    });
  }, []);

  useEffect(() => {
    const index = getQuery().get('index');
    handleDot(parseInt(index) || 0);
  }, [handleDot]);

  return (
    <CarouselContainer>
      <Swipe
        item={items.map((item, index) => (
          <CarouselItemBox key={index} $carouselheight={carouselHeight}>
            {item}
          </CarouselItemBox>
        ))}
        config={{
          isHistory: false,
          historyCallback: (state) => handleDot(state.currentStep),
        }}
      />

      <CarouselDot ref={DotsRef}>
        {items.map((_, index) => (
          <li key={index} aria-label={`carousel dot ${index + 1}`} />
        ))}
      </CarouselDot>
    </CarouselContainer>
  );
};

export default WCarousel;
