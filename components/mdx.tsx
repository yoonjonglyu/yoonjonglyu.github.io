
import { useMDXComponent } from 'next-contentlayer/hooks';

const mdxComponents = {
  h1: (props) => <h1 {...props} />,
  h2: (props) => <h2 {...props} />,
  p: (props) => <p {...props} />,
  ul: (props) => <ul {...props} />,
  code: (props) => <code {...props} />,
};

export const Mdx = ({ code }: { code: string })  =>
 useMDXComponent(code, mdxComponents);
