import { baseApi, errHandler } from '..';

export const GetSelectList = async () =>
  errHandler(
    async () => {
      const { data } = await baseApi(`select/list.json`);
      return data;
    },
    (err) => console.error(err),
  );
