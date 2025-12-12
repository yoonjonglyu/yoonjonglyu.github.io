import { useAtom } from 'jotai';

import { SelectListState } from '../../store/select';

import { GetSelectList } from '../../api/select';

const useSelectList = () => {
  const [selectList, setSelectList] = useAtom(SelectListState);

  const updateSelectList = async () => {
    const res = await GetSelectList();
    setSelectList(res || []);
  };

  return { selectList, updateSelectList };
};

export default useSelectList;
