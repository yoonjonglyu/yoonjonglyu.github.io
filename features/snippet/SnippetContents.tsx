import React from 'react';
import styled from 'styled-components';

import ContentsCard from '../../components/molecules/ContentsCard';

const ContentsArea = styled.section`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: hidden;
`;

export interface SnippetContentsProps {}

const SnippetContents: React.FC = () => {
  return (
    <ContentsArea>
      <ContentsCard
        header={<h2>Snippet</h2>}
        contents={`여기 내용물을 api 콜하는 방식으로 할지 프레임으로 할지 아직 미정`}
      />
    </ContentsArea>
  );
};

export default SnippetContents;
