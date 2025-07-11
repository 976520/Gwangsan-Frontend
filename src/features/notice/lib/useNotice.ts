import { updateNoticeForm } from '@/shared/api/updateNoticeForm';
import { createNotice } from '@/shared/api/createNotice';
import { type Notice } from '@/entities/notice/model/types';
import { FormValues } from '../model/NoticeForm';
import { useCallback, Dispatch, SetStateAction } from 'react';
import { uploadImages } from '@/shared/api/uploadImage';
import { fetchNotices } from '@/shared/api/fetchNotices';
import { deleteNotice } from '@/shared/api/deleteNotice';
import { toast } from 'sonner';
import { mockData } from '@/shared/mock/notices';

export const useNotice = (setNotices?: Dispatch<SetStateAction<Notice[]>>) => {
  const refreshNotices = useCallback(async () => {
    try {
      //const newNotices = await fetchNotices();
      //setNotices(newNotices);

      setNotices?.(mockData);
    } catch (e) {
      toast.error('공지사항을 불러오지 못했어요.');
      console.error(e);
    }
  }, [setNotices]);

  const wrappedCreateNotice = useCallback(
    async (data: FormValues) => {
      try {
        // const images = await uploadImages(data.images);
        // const imageIds = images.map((image) => image.imageId);
        //  await createNotice(data, imageIds);
        //  await refreshNotices();
        const newNotice: Notice = {
          ...data,
          id: Date.now(),
          createdAt: new Date().toISOString(),
          images: data.images.map((file, index) => ({
            imageId: index,
            imageUrl: URL.createObjectURL(file),
          })),
        };

        setNotices?.((prev) => [newNotice, ...prev]);

        toast.success('성공');
      } catch (e) {
        toast.error('공지사항 등록 실패');
        console.error(e);
      }
    },
    // [refreshNotices],
    [setNotices],
  );

  const deleteNoticeById = useCallback(
    async (id: number) => {
      try {
        //await deleteNotice(id);
        // await refreshNotices();
        setNotices?.((prev) => prev.filter((n) => n.id !== id));
      } catch (e) {
        console.error('삭제 에러', e);
      }
    },
    // [refreshNotices],
    [setNotices],
  );

  const updateNotice = useCallback(
    async (id: string, changedForm: FormValues) => {
      const response = await updateNoticeForm(id, changedForm);
      if (response.status === 200) {
        toast.success('공지사항 수정 완료!');
      } else {
        toast.error('수정에 실패했어요');
      }
    },
    [],
  );
  return {
    createNotice: wrappedCreateNotice,
    refreshNotices,
    deleteNoticeById,
    updateNotice,
  };
};
