import React, { useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import SideCard from '../../components/molecules/SideCard';

import useToyList from '../../hooks/toy/useToyList';
import useProjectList from '../../hooks/project/useProjectList';
import usePackageList from '../../hooks/package/usePackageList';

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
  const { ToyNavList, updateToyList } = useToyList();
  const { projectNavList, updateProjectList } = useProjectList();
  const { packageList, updatePackageList } = usePackageList();

  useEffect(() => {
    updateToyList();
    updateProjectList();
    updatePackageList();
  }, []);

  return (
    <SideArea>
      <SideCard
        header={<CardHead>Toy</CardHead>}
        contents={
          <ul>
            {ToyNavList.map((item) => (
              <li>
                <Link href={`/toy/article?post=${item.idx}`}>{item.title}</Link>
              </li>
            ))}
          </ul>
        }
      />
      <SideCard
        header={<CardHead>Project</CardHead>}
        contents={
          <ul>
            {projectNavList.map((item) => (
              <li>
                <Link href={`/project/article?post=${item.idx}`}>{item.title}</Link>
              </li>
            ))}
          </ul>
        }
      />
      <SideCard
        header={<CardHead>Package</CardHead>}
        contents={
          <ul>
            {packageList.map((item) => (
              <li>
                <Link href={`/package?post=${item.idx}`}>{item.title}</Link>
              </li>
            ))}
          </ul>
        }
      />
    </SideArea>
  );
};

export default HomeSide;
