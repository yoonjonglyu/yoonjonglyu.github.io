import { atom, selector } from 'recoil';

export interface ProjectListState {
  idx: number;
  title: string;
  description: string;
  img: string;
}
export const ProjectListState = atom<ProjectListState[]>({
  key: 'ProjectList',
  default: [],
});

export interface ProjectNavListState {
  idx: number;
  title: string;
}
export const ProjectNavListState = selector<ProjectNavListState[]>({
  key: 'ProjectNavList',
  get: ({ get }) => {
    const State = get(ProjectListState);
    return State.map((item) => ({ idx: item.idx, title: item.title }));
  },
});
