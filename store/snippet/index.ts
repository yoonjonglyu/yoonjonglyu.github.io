import { atom } from 'recoil';

export interface SnippetListState {
  idx: number;
  title: string;
}
export const SnippetListState = atom<SnippetListState[]>({
  key: 'snippetList',
  default: [],
});
