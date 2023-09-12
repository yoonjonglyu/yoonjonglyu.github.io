import { baseApi, errHandler } from '..';

export const GetSnippetList = async () =>
  errHandler(
    async () => {
      const { data } = await baseApi.get(`snippet/list.json`);
      return data;
    },
    (err) => console.error(err),
  );
