import { useRecoilState, useRecoilValue } from 'recoil';

import { ToyListState, ToyNavListState } from '../../store/toy';

const useToyList = () => {
  const [toyList, setToyList] = useRecoilState(ToyListState);
  const ToyNavList = useRecoilValue(ToyNavListState);

  const updateToyList = async () => {
    setToyList([]);
  };

  return { toyList, updateToyList,ToyNavList };
};

export default useToyList;
