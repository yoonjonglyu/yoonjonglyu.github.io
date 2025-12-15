import { useMDXComponent } from 'next-contentlayer/hooks';

const mdxComponents = {
  h1: (props) => <h1 {...props} />,
  h2: (props) => <h2 {...props} />,
  p: (props) => <p {...props} />,
  ul: (props) => <ul {...props} />,
  code: (props) => <code {...props} />,
};

export function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code);
  return (
    <div className='markdown-body'>
      <Component components={mdxComponents} />
    </div>
  );
}
