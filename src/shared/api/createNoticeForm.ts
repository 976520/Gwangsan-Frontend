import { FormValues } from '@/features/notice/model/NoticeForm';
import { instance } from '../lib/axios';

export const createNoticeForm = async (
  data: FormValues,
  imageIds: number[],
) => {
  await instance.post(`/post`, {
    title: data.title,
    content: data.content,
    placeName: data.role,
    imageIds: imageIds,
  });
};
