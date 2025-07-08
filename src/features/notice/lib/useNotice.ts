import { createNoticeForm } from '@/shared/api/createNoticeForm';
import { type Notice } from '@/entities/notice/model/types';
import { FormValues } from '../model/NoticeForm';
import { useCallback, Dispatch, SetStateAction } from 'react';
import { uploadImages } from '@/shared/api/uploadImage';
import { fetchNotices } from '@/shared/api/fetchNotices';
import { deleteNotice } from '@/shared/api/deleteNotice';

export const useNotice = (setNotices: Dispatch<SetStateAction<Notice[]>>) => {
  const refreshNotices = useCallback(async () => {
    const newNotices = await fetchNotices();
    setNotices(newNotices);
  }, []);

  const createNotice = useCallback(async (data: FormValues) => {
    const images = await uploadImages(data.images);
    const imageIds = images.map((image) => {
      return image.imageId;
    });

    await createNoticeForm(data, imageIds);
    refreshNotices();
  }, []);

  const deleteNoticeById = useCallback(async (id: number) => {
    await deleteNotice(id);
    refreshNotices();
  }, []);

  return { createNotice, refreshNotices, deleteNoticeById };
};
