import { createNoticeForm } from '@/shared/api/createNoticeForm';
import { useState } from 'react';
import { type Notice } from '@/entities/notice/model/types';
export const useCreateNotice = (
  setNotices: React.Dispatch<React.SetStateAction<Notice[]>>,
) => {
  const createNotice = (notice: Notice) => {
    createNoticeForm(notice);
    setNotices((prev) => [notice, ...prev]);
  };

  return { createNotice };
};
