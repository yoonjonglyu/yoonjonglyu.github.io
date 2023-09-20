import { useQuery } from 'react-query';

import { GetSnippetContents } from '../../api/snippet';

const useSnippetContents = (index: number) => {
  const { data, isLoading, isError } = useQuery(['snippetContents', index], () =>
    GetSnippetContents(`${index}`),
  );
  return { data, isLoading, isError };
};

export default useSnippetContents;
