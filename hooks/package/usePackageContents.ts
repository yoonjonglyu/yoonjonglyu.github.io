import { useQuery } from 'react-query';

import { GetPackageContents } from '../../api/package';

const usePackageContents = (index: number) => {
  const { data, isLoading, isError } = useQuery(['packageContents'], () =>
    GetPackageContents(`${index}`),
  );
  return { data, isLoading, isError };
};

export default usePackageContents;
