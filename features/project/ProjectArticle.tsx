'use client';
import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { getQuery } from 'isa-util';

import ContentsCard from '../../components/molecules/ContentsCard';

import useProjectContents from '../../hooks/project/useProjectContents';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 24px 3px;
`;
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
  const [index, setIndex] = useState(0);
  const { data } = useProjectContents(index);

  useEffect(() => {
    const post = parseInt(getQuery().get('post'));
    if (!isNaN(post)) setIndex(post);
  }, []);

  return (
    <Container>
      <ArticleArea>
        <ContentsCard header={'project article'} contents={data} />
      </ArticleArea>
    </Container>
  );
};

export default ProjectArticle;
