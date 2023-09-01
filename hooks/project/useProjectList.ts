import { useRecoilState, useRecoilValue } from 'recoil';

import { ProjectListState, ProjectNavListState } from '../../store/project';

const useProjectList = () => {
  const [projectList, setProjectList] = useRecoilState(ProjectListState);
  const projectNavList = useRecoilValue(ProjectNavListState);

  const updateProjectList = async () => {
    setProjectList([]);
  };

  return { projectList, updateProjectList, projectNavList };
};

export default useProjectList;
