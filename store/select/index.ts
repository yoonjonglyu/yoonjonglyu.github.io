import { atom } from 'jotai';

export interface SelectListState {
  idx: number;
  title: string;
  description: string;
  img?: string;
  href: string;
}
export const SelectListState = atom<SelectListState[]>([]);
