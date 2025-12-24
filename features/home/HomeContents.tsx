'use client';
import { type FC, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { isMobile } from 'isa-util';

import HomeBanner from './HomeBanner';
import HomeShelf from './HomeShelf';
import HomeSide from './HomeSide';

// 1. 미세한 노이즈 텍스처 (오버레이)
const NoiseOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0.03; /* 아주 미세하게 적용 */
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
`;

// 2. 마우스를 따라다니는 글로우 효과
const MouseGlow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 998;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(
    circle at center,
    rgba(216, 63, 135, 0.12) 0%,
    /* 직접 색상 입력 */ rgba(107, 33, 168, 0.05) 30%,
    /* 보라색 계열 혼합 */ transparent 70%
  );
  /* 초기 위치는 화면 밖 */
  transform: translate3d(-100%, -100%, 0);
  pointer-events: none;
  transition: transform 0.15s ease-out; /* 부드러운 추적 */
  will-change: transform;
`;

const Container = styled.div`
  position: relative; /* 글로우 효과의 기준 */
  display: flex;
  flex-direction: row;
  gap: 24px;
  margin: 24px 3px;
  z-index: 1;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const ContentsArea = styled.section`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 32px;
  overflow: hidden;
`;

const HomeContents: FC = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // 2. 상태를 업데이트하는 대신 DOM의 스타일을 직접 수정
      if (glowRef.current) {
        const x = e.clientX - 400;
        const y = e.clientY - 400;
        glowRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {typeof navigator !== 'undefined' && isMobile() ? null : <MouseGlow ref={glowRef} />}
      <NoiseOverlay />
      <Container>
        <ContentsArea>
          <HomeBanner />
          <HomeShelf />
        </ContentsArea>
        <HomeSide />
      </Container>
    </>
  );
};

export default HomeContents;
