// TODO 안쓰게 될듯?

import { createNoticeForm } from '@/shared/api/createNoticeForm';
import { type Notice } from '@/entities/notice/model/types';
import { FormValues } from '../model/NoticeForm';
import { useCallback, Dispatch, SetStateAction } from 'react';

// TODO 공지 리스트 조회 -> 공지 생성 -> 공지 리스트 재조회
export const useCreateNotice = (
  setNotices: Dispatch<SetStateAction<Notice[]>>,
) => {
  const createNotice = useCallback((data: FormValues) => {
    // createNoticeForm(data);
  }, []);

  return { createNotice };
};
