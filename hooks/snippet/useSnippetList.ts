import { useRecoilState } from 'recoil';

import { SnippetListState } from '../../store/snippet';

import { GetSnippetList } from '../../api/snippet';

const useSnippetList = () => {
  const [snippetList, setSnippetList] = useRecoilState(SnippetListState);

  const updateSnippetList = async () => {
    const res = await GetSnippetList();
    setSnippetList(res || []);
  };

  return { snippetList, updateSnippetList };
};

export default useSnippetList;
