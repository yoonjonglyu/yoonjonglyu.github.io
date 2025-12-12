import { atom } from 'jotai';

export interface SnippetListState {
  idx: number;
  title: string;
}
export const SnippetListState = atom<SnippetListState[]>([]);
