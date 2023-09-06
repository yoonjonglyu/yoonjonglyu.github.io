'use client';
import React, { useEffect } from 'react';
import { styled } from 'styled-components';

import PostCard from '../../components/molecules/PostCard';

import useProjectList from '../../hooks/project/useProjectList';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 24px 3px;
`;
const ListArea = styled.section`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  overflow: hidden;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

export interface ProjectListProps {}

const ProjectList: React.FC<ProjectListProps> = () => {
  const { projectList, updateProjectList } = useProjectList();

  useEffect(() => {
    updateProjectList();
  }, []);

  return (
    <Container>
      <ListArea>
        {projectList.map((item) => (
          <PostCard
            key={item.idx}
            thumnail={{ src: item.img, alt: item.title }}
            href={`/project/article?post=${item.idx}`}
            title={item.title}
            description={item.description}
          />
        ))}
      </ListArea>
    </Container>
  );
};

export default ProjectList;
