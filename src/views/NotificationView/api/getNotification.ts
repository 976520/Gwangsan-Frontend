import { instance } from '@/shared/lib/axios';

export const getNotification = async () => {
  try {
    return (await instance.get('/admin/alert')).data;
  } catch (error) {
    throw error;
  }
};
