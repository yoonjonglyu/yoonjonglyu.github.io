import { useRecoilState, useRecoilValue } from 'recoil';

import { ToyListState, ToyNavListState } from '../../store/toy';

import { GetToyList } from '../../api/toy';

const useToyList = () => {
  const [toyList, setToyList] = useRecoilState(ToyListState);
  const ToyNavList = useRecoilValue(ToyNavListState);

  const updateToyList = async () => {
    const res = await GetToyList();
    setToyList(res || []);
  };

  return { toyList, updateToyList, ToyNavList };
};

export default useToyList;
