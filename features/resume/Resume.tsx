'use client';
import { type FC } from 'react';
import styled from 'styled-components';

import Section from '@components/molecules/Section';

import Header from './ResumeHeader';
import ResumeFocus from './ResumeFocus';
import ResumeWork from './ResumeWork';
import ResumeSkill from './ResumeSkill';
import Footer from './ResumeFooter';

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
      <Section title='Focus'>
        <ResumeFocus />
      </Section>
      <PageBreak />
      <Section title='Work'>
        <ResumeWork />
      </Section>
      <Section title='Skills'>
        <ResumeSkill />
      </Section>
      <Section title='contact'>
        <Footer />
      </Section>
    </Container>
  );
};

export default Resume;
