'use client';
import { type FC } from 'react';
import styled from 'styled-components';

import Section from '@components/molecules/Section';
import { useTranslation } from '@hooks/useTranslation';

import Header from './ResumeHeader';
import ResumeFocus from './ResumeFocus';
import ResumeWork from './ResumeWork';
import ResumeSkill from './ResumeSkill';
import Footer from './ResumeFooter';

const Container = styled.main`
  width: 100%;
  max-width: 794px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 64px 56px;
  box-sizing: border-box;
  background: #0b1020;
  color: #e5e7eb;
  font-size: 14px;
  line-height: 1.6;

  @media (max-width: 768px) {
    padding: 32px 18px;
  }

  @media print {
    width: 794px;
    min-height: 1123px;
    padding: 64px 56px;
    background: #ffffff;
    color: #111827;
  }
`;

const PageBreak = styled.div`
  page-break-before: always;
`;

const Resume: FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Header />
      <Section title={t.resume.focusTitle}>
        <ResumeFocus />
      </Section>
      <PageBreak />
      <Section title={t.resume.workTitle}>
        <ResumeWork />
      </Section>
      <Section title={t.resume.skillsTitle}>
        <ResumeSkill />
      </Section>
      <Section title={t.resume.contactTitle}>
        <Footer />
      </Section>
    </Container>
  );
};

export default Resume;
