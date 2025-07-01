import { FormValues } from '@/features/notice/model/NoticeForm';
import { instance } from '../lib/axios';

export const updateNoticeForm = async (
  id: string,
  changedForm: Partial<FormValues>,
) => {
  const response = await instance.patch(`/api/post/${id}`, changedForm, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response;
};
