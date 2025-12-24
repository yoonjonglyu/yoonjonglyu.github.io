/* eslint-disable @typescript-eslint/no-explicit-any */
// components/mdx.tsx
import * as React from 'react';
import { getMDXComponent } from 'next-contentlayer2/hooks';

const mdxComponents = {
  h1: (props: any) => <h1 {...props} />,
  h2: (props: any) => <h2 {...props} />,
  p: (props: any) => <p {...props} />,
  ul: (props: any) => <ul {...props} />,
  code: (props: any) => <code {...props} />,
};

interface MdxProps {
  code: string;
}

export const Mdx = ({ code }: MdxProps) => {
  // useMDXComponent(code) 대신 getMDXComponent(code)를 사용합니다.
  // 런타임에 훅을 실행하는 것이 아니라, 전달된 코드를 기반으로 컴포넌트를 생성합니다.
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  return <Component components={mdxComponents} />;
};