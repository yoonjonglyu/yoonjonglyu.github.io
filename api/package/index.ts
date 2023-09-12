import { baseApi, errHandler } from '..';

export const GetPackageList = async () =>
  errHandler(
    async () => {
      const { data } = await baseApi(`package/list.json`);
      return data;
    },
    (err) => console.error(err),
  );
