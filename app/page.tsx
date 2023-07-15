'use client';
import styled from 'styled-components';

import SideCard from '../components/molecules/SideCard';

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
  overflow: hidden;
`;
const SideArea = styled.aside`
  flex: 1;
  overflow: hidden;
`;

export default function RootPage() {
  return (
    <Container>
      <ContentsArea>asd</ContentsArea>
      <SideArea>
        <SideCard header={<h3>사이드바</h3>} />
      </SideArea>
    </Container>
  );
}
