import { type FC, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import SideCard from '../../components/molecules/SideCard';

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

const HomeSide: FC = () => {
  const { projectNavList, updateProjectList } = useProjectList();
  const { packageList, updatePackageList } = usePackageList();

  useEffect(() => {
    updateProjectList();
    updatePackageList();
  }, [updateProjectList, updatePackageList]);

  return (
    <SideArea>
      <SideCard
        header={<CardHead>Project</CardHead>}
        contents={
          <ul>
            {projectNavList.map((item) => (
              <li key={item.idx}>
                <Link href={`/project/${item.idx}`}>
                  {item.title}
                </Link>
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
              <li key={item.idx}>
                <Link href={`/package/${item.idx}`}>{item.title}</Link>
              </li>
            ))}
          </ul>
        }
      />
    </SideArea>
  );
};

export default HomeSide;
