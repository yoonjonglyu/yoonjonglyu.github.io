import React from 'react';
import { styled } from 'styled-components';

import PostCard from '../../components/molecules/PostCard';

const ListArea = styled.section`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  overflow: hidden;
`;

export interface ProjectListProps {}

const ProjectList: React.FC<ProjectListProps> = () => {
  return (
    <ListArea>
      {new Array(18).fill(true).map((item, key) => (
        <PostCard
          key={key}
          thumnail={{ alt: 'test' }}
          href='/'
          title='item'
          description='item description'
        />
      ))}
    </ListArea>
  );
};

export default ProjectList;
