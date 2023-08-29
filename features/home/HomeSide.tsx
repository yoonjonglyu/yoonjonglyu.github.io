import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import SideCard from '../../components/molecules/SideCard';

const SideArea = styled.aside`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: hidden;
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 3px;
    background: none;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--color-point);
    border-radius: 12px;
  }

  & a {
    text-decoration: none;
    color: inherit;
  }
  & a:hover {
    color: var(--color-point);
    text-decoration: underline;
  }

  @media (max-width: 1024px) {
    flex-direction: row;
    & div {
      flex: 0 0 95%;
    }
  }
`;
const CardHead = styled.h3`
  color: var(--color-unique);
`;

export interface HomeSideProps {}

const HomeSide: React.FC<HomeSideProps> = () => {
  return (
    <SideArea>
      <SideCard
        header={<CardHead>Toy</CardHead>}
        contents={
          <ul>
            <li>
              <Link href='#'>리스트업 목록</Link>
            </li>
            <li>
              <Link href='#'>리스트업 목록</Link>
            </li>
            <li>
              <Link href='#'>리스트업 목록</Link>
            </li>
            <li>
              <Link href='#'>리스트업 목록</Link>
            </li>
            <li>
              <Link href='#'>리스트업 목록</Link>
            </li>
          </ul>
        }
      />
      <SideCard
        header={<CardHead>Project</CardHead>}
        contents={
          <ol>
            <li>
              <Link href='#'>리스트업 목록</Link>
            </li>
            <li>
              <Link href='#'>리스트업 목록</Link>
            </li>
            <li>
              <Link href='#'>리스트업 목록</Link>
            </li>
            <li>
              <Link href='#'>리스트업 목록</Link>
            </li>
            <li>
              <Link href='#'>리스트업 목록</Link>
            </li>
          </ol>
        }
      />
      <SideCard
        header={<CardHead>Package</CardHead>}
        contents={
          <ol>
            <li>
              <Link href='#'>리스트업 목록</Link>
            </li>
            <li>
              <Link href='#'>리스트업 목록</Link>
            </li>
            <li>
              <Link href='#'>리스트업 목록</Link>
            </li>
            <li>
              <Link href='#'>리스트업 목록</Link>
            </li>
            <li>
              <Link href='#'>리스트업 목록</Link>
            </li>
          </ol>
        }
      />
    </SideArea>
  );
};

export default HomeSide;
