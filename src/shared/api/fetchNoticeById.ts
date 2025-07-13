import { instance } from '@/shared/lib/axios';
import { Notice } from '@/entities/notice/model/types';

export const fetchNoticeById = async (id: string): Promise<Notice> => {
  const { data } = await instance.get(`/notice/${id}`);
  return data;
};
