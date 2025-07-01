import { createNoticeForm } from '@/shared/api/createNoticeForm';
import { type Notice } from '@/entities/notice/model/types';
import { FormValues } from '../model/NoticeForm';
import { useState, useCallback } from 'react';

export const useCreateNotice = () => {
  const [notices, setNotices] = useState<Notice[]>([]);

  const createNotice = useCallback((data: FormValues) => {
    createNoticeForm(data);

    const newNotice: Notice = {
      id: new Date().getTime(),
      title: data.title,
      content: data.content,
      role: data.role,
      author: '',
      date: '2025-05-05',
      views: 0,
    };

    setNotices((prev) => [newNotice, ...prev]);
  }, []);

  return { createNotice, notices, setNotices };
};
