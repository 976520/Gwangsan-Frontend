import { createNotice } from '@/shared/api/createNotice';
import { type Notice } from '@/entities/notice/model/types';
import { FormValues } from '../model/NoticeForm';
import { useCallback, Dispatch, SetStateAction } from 'react';
import { uploadImages } from '@/shared/api/uploadImage';
import { fetchNotices } from '@/shared/api/fetchNotices';
import { deleteNotice } from '@/shared/api/deleteNotice';
import { toast } from 'sonner';

export const useNotice = (setNotices: Dispatch<SetStateAction<Notice[]>>) => {
  const refreshNotices = useCallback(async () => {
    try {
      const newNotices = await fetchNotices();
      setNotices(newNotices);
    } catch (e) {
      toast.error('공지사항을 불러오지 못했어요.');
      console.error(e);
    }
  }, [setNotices]);

  const wrappedCreateNotice = useCallback(
    async (data: FormValues) => {
      try {
        const images = await uploadImages(data.images);
        const imageIds = images.map((image) => image.imageId);
        await createNotice(data, imageIds);
        await refreshNotices();
        toast.success('성공');
      } catch (e) {
        toast.error('공지사항 등록 실패');
        console.error(e);
      }
    },
    [refreshNotices],
  );

  const deleteNoticeById = useCallback(
    async (id: number) => {
      try {
        await deleteNotice(id);
        await refreshNotices();
      } catch (e) {
        console.error('삭제 에러', e);
      }
    },
    [refreshNotices],
  );

  return { wrappedCreateNotice, refreshNotices, deleteNoticeById };
};
