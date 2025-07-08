import type { Notice } from '@/entities/notice/model/types';
import { instance } from '../lib/axios';
import { toast } from 'sonner';

export const fetchNotices = async (): Promise<Notice[]> => {
  try {
    const { data } = await instance.get('/post');
    return data;
  } catch (error) {
    toast.error(`${error}`);
    throw new Error(`${error}`);
  }
};
