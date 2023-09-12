import { baseApi } from '..';

export const GetProjectList = async () => {
  try {
    const { data } = await baseApi(`project/list.json`);
    return data;
  } catch (err) {
    console.error(err);
  }
};
