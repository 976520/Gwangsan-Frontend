import { updateNoticeForm } from '@/shared/api/updateNoticeForm';
import { createNotice } from '@/shared/api/createNotice';
import { type Notice } from '@/entities/notice/model/types';
import { FormValues } from '../model/NoticeForm';
import { useCallback } from 'react';
import { uploadImage } from '@/shared/api/uploadImage';
import { deleteNotice } from '@/shared/api/deleteNotice';
import { toast } from 'sonner';
import { useQueryClient } from '@tanstack/react-query';

export const useNotice = () => {
  const queryClient = useQueryClient();

  const wrappedCreateNotice = useCallback(async (data: FormValues) => {
    try {
      const uploadedImage = await uploadImage(Array.from(data.images));
      await queryClient.invalidateQueries({ queryKey: ['noticeList'] });

      const newNotice: Partial<Notice> = {
        ...data,
        images: uploadedImage,
        place: data.placeName,
      };

      await createNotice(newNotice);
      toast.success('성공');
    } catch (e) {
      toast.error('공지사항 등록 실패');
      // console.error(e);
      console.log(e); // TODO 위에껄로 바꾸기
    }
  }, []);

  const deleteNoticeById = useCallback(async (id: number) => {
    try {
      await deleteNotice(id);
      await queryClient.invalidateQueries({ queryKey: ['noticeList'] });
    } catch (e) {
      console.error('삭제 에러', e);
    }
  }, []);

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
    deleteNoticeById,
    updateNotice,
  };
};
