import { useRecoilState, useRecoilValue } from 'recoil';

import { ProjectListState, ProjectNavListState } from '../../store/project';

import { GetProjectList } from '../../api/project';

const useProjectList = () => {
  const [projectList, setProjectList] = useRecoilState(ProjectListState);
  const projectNavList = useRecoilValue(ProjectNavListState);

  const updateProjectList = async () => {
    const res = await GetProjectList();
    setProjectList(res || []);
  };

  return { projectList, updateProjectList, projectNavList };
};

export default useProjectList;
