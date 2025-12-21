'use client';
import { type FC } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { allProjects, allPackages } from '@contentlayer/generated';
import SideCard from '@components/molecules/SideCard';

const SideArea = styled.aside`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px; /* 간격 확장 */
  overflow: hidden;

  /* 리스트 스타일 커스텀 */
  & ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  & li {
    position: relative;
    padding-left: 14px;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
    transition: all 0.2s ease;

    /* 리스트 불렛(Bullet)을 사이버틱한 점으로 변경 */
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 4px;
      height: 4px;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      transition: all 0.2s ease;
    }

    &:hover {
      color: var(--color-point);
      transform: translateX(4px);

      &::before {
        background: var(--color-point);
        box-shadow: 0 0 8px var(--color-point);
      }
    }
  }

  & a {
    text-decoration: none;
    color: inherit;
    display: block;
    width: 100%;
  }

  @media (max-width: 1024px) {
    flex-direction: row;
    overflow-x: auto;
    padding-bottom: 10px;

    & > div {
      flex: 0 0 280px; /* 모바일에서 가로 스크롤 카드 너비 고정 */
    }

    &::-webkit-scrollbar {
      height: 3px;
    }
    &::-webkit-scrollbar-thumb {
      background: var(--color-point);
      border-radius: 10px;
    }
  }
`;

const CardHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  & h3 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--color-unique);
    letter-spacing: 0.5px;
  }

  /* 아이콘 느낌의 장식 요소 추가 */
  &::after {
    content: '◈';
    font-size: 0.8rem;
    opacity: 0.5;
    color: var(--color-unique);
  }
`;

const StyledSideCard = styled(SideCard)`
  background: rgba(255, 255, 255, 0.03) !important;
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08) !important;
  border-radius: 16px !important;
  padding: 24px !important;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: rgba(var(--color-unique-rgb), 0.4) !important;
  }
`;

const HomeSide: FC = () => {
  return (
    <SideArea>
      <StyledSideCard
        header={
          <CardHead>
            <h3>Project</h3>
          </CardHead>
        }
        contents={
          <ul>
            {allProjects.map((item) => (
              <li key={item.slug}>
                <Link href={`/archive/project/${item.slug}`}>{item.title}</Link>
              </li>
            ))}
          </ul>
        }
      />
      <StyledSideCard
        header={
          <CardHead>
            <h3>Package</h3>
          </CardHead>
        }
        contents={
          <ul>
            {allPackages.map((item) => (
              <li key={item.slug}>
                <Link href={`/archive/package/${item.slug}`}>{item.title}</Link>
              </li>
            ))}
          </ul>
        }
      />
    </SideArea>
  );
};

export default HomeSide;
