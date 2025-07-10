import { FormValues } from '@/features/notice/model/NoticeForm';
import { instance } from '../lib/axios';

export const createNotice = async (data: FormValues, imageIds: number[]) => {
  await instance.post(`/notice`, {
    title: data.title,
    content: data.content,
    placeName: data.placeName,
    imageIds: imageIds,
    role: data.role,
  });
};
