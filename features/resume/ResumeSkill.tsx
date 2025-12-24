import { type FC } from 'react';
import styled from 'styled-components';

const SkillList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 16px;
  font-size: 14px;
  color: #d1d5db;
`;

const Skill = styled.li`
  list-style: none;
`;

const ResumeSkill: FC = () => (
  <SkillList>
    <Skill>TypeScript</Skill>
    <Skill>React</Skill>
    <Skill>Storybook</Skill>
    <Skill>Next.js</Skill>
    <Skill>PWA</Skill>
    <Skill>Design Systems</Skill>
  </SkillList>
);

export default ResumeSkill;
