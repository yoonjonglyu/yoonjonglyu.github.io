import { baseApi, errHandler } from '..';

export const GetProjectList = async () =>
  errHandler(
    async () => {
      const { data } = await baseApi(`project/list.json`);
      return data;
    },
    (err) => console.error(err),
  );
