import { useRecoilState } from 'recoil';

import { SelectListState } from '../../store/select';

const useSelectList = () => {
  const [selectList, setSelectList] = useRecoilState(SelectListState);

  const updateSelectList = async () => {
    setSelectList([]);
  };

  return { selectList, updateSelectList };
};

export default useSelectList;
