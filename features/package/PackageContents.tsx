'use client';
import React from 'react';
import styled from 'styled-components';

import ContentsCard from '../../components/molecules/ContentsCard';
import PackageSide from './PackageSide';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 18px;
  margin: 24px 3px;
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`;
const ContentsArea = styled.section`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: hidden;
`;

export interface PackageContentsProps {}

const PackageContents: React.FC = () => {
  return (
    <Container>
      <ContentsArea>
        <ContentsCard
          header={<h2>PackageProject</h2>}
          contents={`
          <iframe src="https://yoonjonglyu.github.io/memo/">iframe을 지원하지 않는 브라우저입니다.</iframe>
          <h1>yoonjonglyu.github.io</h1><hr />

<h2> 기획</h2><hr />

<p>구글 애드센스를 신청 할 루트 사이트가 필요하다. 뭘 만들지에 대해서 고민을 해봤지만 딱히 답은 안나옴  
그래서 그냥 단순한 아카이브 느낌으로 사이트를 만들어보기로했음. </p> 
<ol>
<li>배포할 패키지에 관련된 페이지</li>
<li>간단한 예제 코드들에 관한 페이지</li>
<li>토이로 제작할만한 내용들에 관한 페이지</li>
<li>사이드 프로젝트 겸 프로덕트로 운영할 것들에 대한 페이지</li>
</ol>
<p>정도 구상해봤다. 대략적인 구성은 그렇고 추가적으로 게시판을 하나 달아볼 생각인데  
게시판의 경우 CMS 프로젝트랑 연계해서 기획중.  <br />
프론트 벡엔드 분리해서 각각 따로 패키지를 구성하고 그걸 통합한 CMS 프로젝트 느낌으로 진행할 예정.
</p>
<h2> LICNESE</h2><hr />
<p>MIT</p>`}
        />
      </ContentsArea>
      <PackageSide />
    </Container>
  );
};

export default PackageContents;
