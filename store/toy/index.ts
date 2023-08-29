import { atom, selector } from 'recoil';

export interface ToyListState {
  idx: number;
  title: string;
  description: string;
  img: string;
}
export const ToyListState = atom<ToyListState[]>({
  key: 'toyList',
  default: [],
});

export interface ToyNavListState {
  idx: number;
  title: string;
}
export const ToyNavListState = selector<ToyNavListState[]>({
  key: 'toyNavList',
  get: ({ get }) => {
    const toyState = get(ToyListState);
    return toyState.map((item) => ({ idx: item.idx, title: item.title }));
  },
});
