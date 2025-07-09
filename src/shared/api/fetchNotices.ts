import type { Notice } from '@/entities/notice/model/types';
import { instance } from '../lib/axios';

export const fetchNotices = async (): Promise<Notice[]> => {
  const { data } = await instance.get('/post');
  return data;
};
