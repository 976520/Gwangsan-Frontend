import { instance } from '../lib/axios';
import type { Notice } from '@/entities/notice/model/types';

export const fetchNotices = async (): Promise<Notice[]> => {
  const { data } = await instance.get('/api/post');
  return data;
};
