import { baseApi } from '..';

export const GetToyList = async () => {
  try {
    const { data } = await baseApi(`toy/list.json`);
    return data;
  } catch (err) {
    console.error(err);
  }
};
