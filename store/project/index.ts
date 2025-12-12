import { atom } from 'jotai';

export interface ProjectListState {
  idx: number;
  title: string;
  description: string;
  img?: string;
}
export const ProjectListState = atom<ProjectListState[]>([]);

export interface ProjectNavListState {
  idx: number;
  title: string;
}
export const ProjectNavListState = atom<ProjectNavListState[]>((get) => {
  const State = get(ProjectListState);
  return State.map((item) => ({ idx: item.idx, title: item.title }));
});
