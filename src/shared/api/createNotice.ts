import { FormValues } from '@/features/notice/model/NoticeForm';
import { instance } from '../lib/axios';
import { Notice } from '@/entities/notice/model/types';

export const createNotice = async (notice: Partial<Notice>) => {
  await instance.post(`/notice`, {
    title: notice.title,
    content: notice.content,
    placeName: notice.place ?? '',
    imageIds: notice.images?.map((image) => image.imageId),
    roles: [notice.role],
  });
};
