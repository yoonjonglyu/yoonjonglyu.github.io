import { useAtom,useAtomValue} from 'jotai';

import { ToyListState, ToyNavListState } from '../../store/toy';

import { GetToyList } from '../../api/toy';

const useToyList = () => {
  const [toyList, setToyList] = useAtom(ToyListState);
  const ToyNavList = useAtomValue(ToyNavListState);

  const updateToyList = async () => {
    const res = await GetToyList();
    setToyList(res || []);
  };

  return { toyList, updateToyList, ToyNavList };
};

export default useToyList;
