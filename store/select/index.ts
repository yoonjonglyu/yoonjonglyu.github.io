import { atom } from 'recoil';

export interface SelectListState {
  idx: number;
  title: string;
  description: string;
  img: string;
}
export const SelectListState = atom<SelectListState[]>({
  key: 'selectList',
  default: [],
});
