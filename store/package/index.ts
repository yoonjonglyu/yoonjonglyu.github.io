import { atom } from 'recoil';

export interface PackageListState {
  idx: number;
  title: string;
}
export const PackageListState = atom<PackageListState[]>({
  key: 'packageList',
  default: [],
});
