import { useRecoilState, useRecoilValue } from 'recoil';

import { SnippetListState } from '../../store/snippet';

const useSnippetList = () => {
  const [snippetList, setSnippetList] = useRecoilState(SnippetListState);

  const updateSnippetList = async () => {
    setSnippetList([]);
  };

  return { snippetList, updateSnippetList };
};

export default useSnippetList;
