import { instance } from '@/shared/lib/axios';
import { Notice } from '@/entities/notice/model/types';

export const fetchNoticeById = async (
  id: string,
): Promise<Notice | undefined> => {
  const { data } = await instance.get(`/post/${id}`);
  return data;
};
