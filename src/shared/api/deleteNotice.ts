import { instance } from '../lib/axios';

export const deleteNotice = async (id: number) => {
  await instance.delete(`/notice/${id.toString()}`);
};
