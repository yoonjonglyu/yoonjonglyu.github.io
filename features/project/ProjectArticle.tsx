import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { getQuery } from 'isa-util';

import ContentsCard from '../../components/molecules/ContentsCard';

const ArticleArea = styled.section`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  overflow: hidden;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

export interface ProjectArticleProps {}

const ProjectArticle: React.FC<ProjectArticleProps> = () => {
  const [isQuery, setIsQuery] = useState(true);
  
  useEffect(() => {
    const Query = getQuery();
    if (typeof Query.get('post') !== 'string') setIsQuery(false);
  }, []);

  return (
    <ArticleArea>
      <ContentsCard header={'project article'} contents={'asdsda'} />
    </ArticleArea>
  );
};

export default ProjectArticle;
