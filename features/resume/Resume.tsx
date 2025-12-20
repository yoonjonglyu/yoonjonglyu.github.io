'use client';
import { type FC } from 'react';
import styled from 'styled-components';

import Header from './ResumeHeader';
import Footer from './ResumeFooter';
import Section from '@components/molecules/Section';
import ResumeSkill from './ResumeSkill';

const Container = styled.main`
  width: 794px;
  min-height: 1123px;
  margin: 0 auto;
  padding: 64px 56px;
  background: #0b1020;
  color: #e5e7eb;
  font-size: 14px;
  line-height: 1.6;
`;
const PageBreak = styled.div`
  page-break-before: always;
`;

const Resume: FC = () => {
  return (
    <Container>
      <Header />
      <Section title='Focus' />
      <Section title='Selected Projects' />
      <Section title='Packages & Open Source' />
      <PageBreak />
      <Section title='Skills'>
        <ResumeSkill />
      </Section>
      <Footer />
    </Container>
  );
};

export default Resume;
