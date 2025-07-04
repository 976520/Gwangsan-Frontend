import { instance } from '@/shared/lib/axios';
import { Notice } from '@/entities/notice/model/types';
import { toast } from 'sonner';

export const fetchNoticeById = async (id: string): Promise<Notice> => {
  try {
    const { data } = await instance.get(`/api/post/${id}`);
    return data;
  } catch (error) {
    toast.error(`${error}`);
    throw new Error(`${error}`);
  }
};
