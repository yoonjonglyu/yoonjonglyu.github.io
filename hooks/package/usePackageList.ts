import { useRecoilState } from 'recoil';

import { PackageListState } from '../../store/package';

const usePackageList = () => {
  const [packageList, setPackageList] = useRecoilState(PackageListState);

  // 이 프로젝트처럼 json-server 형식으로 사용할게 아니라면 react-query를 쓸듯
  const updatePackageList = async () => {
    setPackageList([]);
  };

  return { packageList, updatePackageList };
};

export default usePackageList;
