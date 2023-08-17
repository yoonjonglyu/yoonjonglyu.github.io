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

  & ul {
    height: 230px;
    overflow: auto;
  }
  & ul::-webkit-scrollbar {
    width: 2px;
    background: none;
  }
  & ul::-webkit-scrollbar-thumb {
    background: var(--color-point);
  }
  & ul li {
    margin-bottom: 6px;
  }
  & a {
    text-decoration: none;
    color: inherit;
  }
`;
const CardHead = styled.h3`
  color: var(--color-unique);
`;

export interface SnippetSideProps {}

const SnippetSide: React.FC<SnippetSideProps> = () => {
  return (
    <SideArea>
      <SideCard
        css={`
          height: 300px;
        `}
        header={<CardHead>Snippet List</CardHead>}
        contents={
          <ul>
            {new Array(20).fill(true).map((_, key) => {
              return (
                <li key={key}>
                  <Link href='#'>스니펫</Link>
                </li>
              );
            })}
          </ul>
        }
      />
    </SideArea>
  );
};

export default SnippetSide;
