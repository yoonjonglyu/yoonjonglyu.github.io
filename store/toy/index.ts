import { atom } from 'jotai';

export interface ToyListState {
  idx: number;
  title: string;
  description: string;
  img?: string;
}
export const ToyListState = atom<ToyListState[]>([]);

export interface ToyNavListState {
  idx: number;
  title: string;
}
export const ToyNavListState = atom<ToyNavListState[]>((get) => {
  const toyState = get(ToyListState);
  return toyState.map((item) => ({ idx: item.idx, title: item.title }));
});
