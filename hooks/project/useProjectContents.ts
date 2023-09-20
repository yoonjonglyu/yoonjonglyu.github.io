import { useQuery } from 'react-query';

import { GetProjectContents } from '../../api/project';

const useProjectContents = (index: number) => {
  const { data, isLoading, isError } = useQuery(['projectContents', index], () =>
    GetProjectContents(`${index}`),
  );
  return { data, isLoading, isError };
};

export default useProjectContents;
