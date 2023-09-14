import React, { useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import SideCard from '../../components/molecules/SideCard';

import useSnippetList from '../../hooks/snippet/useSnippetList';

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
  const { snippetList, updateSnippetList } = useSnippetList();

  useEffect(() => {
    updateSnippetList();
  }, []);

  return (
    <SideArea>
      <SideCard
        css={`
          height: 300px;
        `}
        header={<CardHead>Snippet List</CardHead>}
        contents={
          <ul>
            {snippetList.map((item) => {
              return (
                <li key={item.idx}>
                  <Link href={`/snippet?post=${item.idx}`}>{item.title}</Link>
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
