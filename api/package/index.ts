import { baseApi } from '..';

export const GetPackageList = async () => {
  try {
    const { data } = await baseApi(`package/list.json`);
    return data;
  } catch (err) {
    console.error(err);
  }
};
