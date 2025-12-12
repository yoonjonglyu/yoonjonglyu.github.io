import { atom } from 'jotai';

export interface PackageListState {
  idx: number;
  title: string;
}
export const PackageListState = atom<PackageListState[]>([]);
