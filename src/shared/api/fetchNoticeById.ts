import { instance } from '@/shared/lib/axios';
import { Notice } from '@/entities/notice/model/types';
import { toast } from 'sonner';

export const fetchNoticeById = async (
  id: string,
): Promise<Notice | undefined> => {
  try {
    const { data } = await instance.get(`/post/${id}`);
    return data;
  } catch (error) {
    toast.error(`${error}`);
    return undefined;
  }
};
