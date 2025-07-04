import { FormValues } from '@/features/notice/model/NoticeForm';
import { instance } from '../lib/axios';
import { toast } from 'sonner';

export const createNoticeForm = async (
  data: FormValues,
  imageIds: number[],
) => {
  try {
    await instance.post(`/api/post`, {
      title: data.title,
      content: data.content,
      placeName: data.role,
      imageIds: imageIds,
    });
  } catch (error) {
    toast.error(`${error}`);
  }
};
