'use client';
import { type FC } from 'react';
import styled, { keyframes } from 'styled-components';

import Card from '@components/atoms/Card';

// 둥실둥실 떠다니는 애니메이션 추가 (입체감)
const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(2deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const TextBox = styled.div`
  position: absolute;
  top: 50%;
  right: 48px;
  transform: translateY(-50%); /* 중앙 정렬로 변경 */
  text-align: right;
  z-index: 10;
  max-width: 500px;

  @media (max-width: 1024px) {
    right: 24px;
    max-width: 80%;
  }
`;

const Title = styled.h2`
  margin: 0;
  font-size: 3rem; /* 크기 키움 */
  font-weight: 800;
  line-height: 1.1;
  color: #ffffff;
  letter-spacing: -1px;
  /* 이미지처럼 깔끔한 화이트 텍스트 유지 */

  @media (max-width: 1024px) {
    font-size: 2rem;
  }
`;

const SubTitle = styled.p`
  margin-top: 20px;
  font-size: 1.1rem;
  line-height: 1.6;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.7);
  word-break: keep-all;
`;

// 이미지 배경의 다각형 패턴 재현
const BackgroundPattern = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    width: 150%;
    height: 150%;
    background: linear-gradient(
          135deg,
          rgba(255, 255, 255, 0.05) 25%,
          transparent 25%
        ) -50px 0,
      linear-gradient(225deg, rgba(255, 255, 255, 0.05) 25%, transparent 25%) -50px
        0,
      linear-gradient(315deg, rgba(255, 255, 255, 0.05) 25%, transparent 25%),
      linear-gradient(45deg, rgba(255, 255, 255, 0.05) 25%, transparent 25%);
    background-size: 100px 100px;
    opacity: 0.3;
    clip-path: polygon(0 0, 100% 0, 80% 100%, 0% 100%);
  }
`;

// 입체적인 구체 (Moon)
const Sphere = styled.div<{
  size: string;
  top: string;
  left: string;
  color1: string;
  color2: string;
  delay: string;
}>`
  position: absolute;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  border-radius: 50%;
  background: radial-gradient(
    circle at 30% 30%,
    ${(props) => props.color1},
    ${(props) => props.color2}
  );
  box-shadow: -20px 20px 50px rgba(0, 0, 0, 0.3);
  z-index: 2;
  animation: ${float} 6s ease-in-out infinite;
  animation-delay: ${(props) => props.delay};
  opacity: 0.9;
  backdrop-filter: blur(5px);
`;

const HomeBanner: FC = () => {
  return (
    <Card
      css={`
        position: relative;
        min-height: 480px; /* 깊이감을 위해 높이 확보 */
        padding: 48px;
        overflow: hidden;
        border: none;
        background: linear-gradient(
          115deg,
          #2a1b3d 0%,
          /* 딥 퍼플 */ #44318d 30%,
          /* 미드 퍼플 */ #d83f87 100% /* 포인트 핑크/레드 */
        );

        @media (max-width: 1024px) {
          min-height: 360px;
          padding: 32px;
        }
      `}>
      <BackgroundPattern />

      <TextBox>
        <Title>
          Designing
          <br />
          Scalable UI Systems
        </Title>
        <SubTitle>
          UI Architect & Frontend Engineer.
          <br />
          Exploring reusable components, design systems, and real-world web
          applications.
        </SubTitle>
      </TextBox>

      {/* 이미지의 구체들 재현 */}
      <Sphere
        size='220px'
        top='10%'
        left='5%'
        color1='var(--color-point)'
        color2='#44318d'
        delay='0s'
      />
      <Sphere
        size='120px'
        top='55%'
        left='15%'
        color1='#d83f87'
        color2='#2a1b3d'
        delay='-2s'
      />
    </Card>
  );
};

export default HomeBanner;
