import { type FC } from 'react';
import styled from 'styled-components';
import { useTranslation } from '@hooks/useTranslation';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SkillRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: baseline;
    gap: 16px;
  }
`;

const CategoryLabel = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #9ca3af;
  min-width: 175px;
  letter-spacing: 0.02em;

  @media print {
    color: #374151;
  }
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px 10px;
  flex: 1;
`;

const Tag = styled.span`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #e5e7eb;
  padding: 3px 9px;
  border-radius: 4px;
  font-size: 13px;
  line-height: 1.4;

  @media print {
    background: #f3f4f6;
    border-color: #e5e7eb;
    color: #111827;
  }
`;

const ResumeSkill: FC = () => {
  const { t } = useTranslation();

  const skillGroups = [
    {
      category: t.resume.skillCategories.ai,
      skills: [
        'LLM Agent Harness (Brain)',
        'Autonomous Tool Calling',
        'Multi-Layer Guardrails',
        'Self-Correction Feedback Loops',
        'Google GenAI & OpenAI API',
        'On-Device AI Vision',
        'Zod Schema Validation',
      ],
    },
    {
      category: t.resume.skillCategories.frontend,
      skills: [
        'TypeScript',
        'React 19',
        'Next.js 16 (App Router)',
        'Storybook 10',
        'Design Systems (Token Architecture)',
        'Component-Driven Development (CDD)',
      ],
    },
    {
      category: t.resume.skillCategories.mobile,
      skills: [
        'Capacitor 8 (Android/iOS)',
        'Flutter',
        'Serwist (Service Worker PWA)',
        'Offline-First UX',
      ],
    },
    {
      category: t.resume.skillCategories.security,
      skills: [
        'Zero-Knowledge Architecture',
        'Argon2id (KDF)',
        'AES-256-GCM',
        'WebCrypto API',
        'Air-Gapped QR Backup',
      ],
    },
    {
      category: t.resume.skillCategories.state,
      skills: [
        'Jotai',
        'Zustand',
        'styled-components',
        'Tailwind CSS 4',
        'CSS Modules',
      ],
    },
    {
      category: t.resume.skillCategories.tooling,
      skills: [
        'Vitest',
        'Playwright',
        'Vite',
        'Contentlayer2',
        'Webpack',
        'Git & GitHub Actions',
      ],
    },
  ];

  return (
    <Container>
      {skillGroups.map((group) => (
        <SkillRow key={group.category}>
          <CategoryLabel>{group.category}</CategoryLabel>
          <TagList>
            {group.skills.map((skill) => (
              <Tag key={skill}>{skill}</Tag>
            ))}
          </TagList>
        </SkillRow>
      ))}
    </Container>
  );
};

export default ResumeSkill;
