import type { Notice } from '@/entities/notice/model/types';
import { instance } from '../lib/axios';

export const fetchNotices = async (): Promise<Notice[]> => {
  const { data, status } = await instance.get('/notice', {
    withCredentials: true,
  });
  return data;
};
