import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import ContentsCard from './ContentsCard';

const meta: Meta<typeof ContentsCard> = {
  title: 'Archive/Ui/Molecules/ContentsCard',
  component: ContentsCard,
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof ContentsCard>;

export const Basic: Story = {
  args: {
    header: <h2>PackageProject</h2>,
    contents: (
      <>
        <h1>yoonjonglyu.github.io</h1>
        <hr />
        <h2>기획</h2>
        <hr />
        <p>
          구글 애드센스를 신청 할 루트 사이트가 필요하다. 아카이브 느낌으로 사이트를 제작 중입니다.
        </p>
        <ol>
          <li>배포할 패키지에 관련된 페이지</li>
          <li>간단한 예제 코드들에 관한 페이지</li>
          <li>토이로 제작할만한 내용들에 관한 페이지</li>
          <li>사이드 프로젝트 겸 프로덕트로 운영할 것들에 대한 페이지</li>
        </ol>
        <h2>LICENSE</h2>
        <hr />
        <p>MIT</p>
      </>
    ),
  },
};
