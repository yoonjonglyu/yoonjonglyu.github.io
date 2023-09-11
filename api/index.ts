import axios, { CreateAxiosDefaults } from 'axios';

const createInstance = (url: string, options?: CreateAxiosDefaults) => {
  const instance = axios.create({ baseURL: url, ...options });
  return instance;
};

export const baseApi = createInstance('https://yoonjonglyu.github.io/archivedata/');
