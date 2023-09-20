import { useQuery } from 'react-query';

import { GetToyContents } from '../../api/toy';

const useToyContents = (index: number) => {
  const { data, isLoading, isError } = useQuery(['toyContents', index], () =>
    GetToyContents(`${index}`)
  );
  return { data, isLoading, isError };
};

export default useToyContents;
