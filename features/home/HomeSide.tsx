import React from 'react';
import styled from 'styled-components';

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

  @media (max-width: 1024px) {
    flex-direction: row;
    & div {
      flex: 0 0 95%;
    }
  }
`;

export interface HomeSideProps {}

const HomeSide: React.FC<HomeSideProps> = () => {
  return (
    <SideArea>
      <SideCard
        header={<h3>사이드바</h3>}
        contents={
          <ul>
            <li>리스트업 목록</li>
            <li>리스트업 목록</li>
            <li>리스트업 목록</li>
            <li>리스트업 목록</li>
            <li>리스트업 목록</li>
          </ul>
        }
      />
      <SideCard
        header={<h3>사이드바</h3>}
        contents={
          <ol>
            <li>
              리스트업 목록
              <ol>
                <li>리스트업 목록2</li>
                <li>리스트업 목록2</li>
                <li>리스트업 목록2</li>
                <li>리스트업 목록2</li>
              </ol>
            </li>
            <li>리스트업 목록</li>
            <li>리스트업 목록</li>
            <li>리스트업 목록</li>
            <li>리스트업 목록</li>
          </ol>
        }
      />
      <SideCard
        header={<h3>사이드바</h3>}
        contents={
          <ol>
            <li>
              리스트업 목록
              <ol>
                <li>리스트업 목록2</li>
                <li>리스트업 목록2</li>
                <li>리스트업 목록2</li>
                <li>리스트업 목록2</li>
              </ol>
            </li>
            <li>리스트업 목록</li>
            <li>리스트업 목록</li>
            <li>리스트업 목록</li>
            <li>리스트업 목록</li>
          </ol>
        }
      />
    </SideArea>
  );
};

export default HomeSide;
