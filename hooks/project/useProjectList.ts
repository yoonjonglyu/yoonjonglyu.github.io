import { useAtom, useAtomValue } from 'jotai';

import { ProjectListState, ProjectNavListState } from '../../store/project';

import { GetProjectList } from '../../api/project';

const useProjectList = () => {
  const [projectList, setProjectList] = useAtom(ProjectListState);
  const projectNavList = useAtomValue(ProjectNavListState);

  const updateProjectList = async () => {
    const res = await GetProjectList();
    setProjectList(res || []);
  };

  return { projectList, updateProjectList, projectNavList };
};

export default useProjectList;
