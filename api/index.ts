import axios, { CreateAxiosDefaults } from 'axios';

const createInstance = (url: string, options?: CreateAxiosDefaults) => {
  const instance = axios.create({ baseURL: url, ...options });
  return instance;
};

export const baseApi = createInstance(
  'https://yoonjonglyu.github.io/archivedata/',
);

export const errHandler = async (
  resolve: Function,
  reject: (err: any) => any,
) => {
  try {
    const res = await resolve();
    return res;
  } catch (err) {
    const res = reject(err);
    return res;
  }
};
