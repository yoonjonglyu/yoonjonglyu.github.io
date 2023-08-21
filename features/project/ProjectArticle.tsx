import React from 'react';
import { styled } from 'styled-components';

import ContentsCard from '../../components/molecules/ContentsCard';

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

export interface ProjectArticleProps {
  title: string,
  contents: string
}

const ProjectArticle: React.FC<ProjectArticleProps> = ({title, contents}) => {
  return (
    <ContentsCard header={<h4>Project</h4>} contents={``} />
  );
};

export default ProjectArticle;
