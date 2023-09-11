import { baseApi } from '..';

export const GetSnippetList = async () => {
  try {
    const { data } = await baseApi.get(`snippet/list.json`);
    return data;
  } catch (err) {
    console.error(err);
  }
};
