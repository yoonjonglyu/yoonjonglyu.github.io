import { baseApi, errHandler } from '..';

export const GetToyList = async () =>
  errHandler(
    async () => {
      const { data } = await baseApi(`toy/list.json`);
      return data;
    },
    (err) => console.error(err),
  );
