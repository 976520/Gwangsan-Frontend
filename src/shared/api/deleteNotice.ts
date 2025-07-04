import { instance } from '../lib/axios';
import { toast } from 'sonner';

export const deleteNotice = async (id: number) => {
  try {
    await instance.delete(`/api/post/${id.toString()}`);
  } catch (error) {
    toast.error(`${error}`);
  }
};
