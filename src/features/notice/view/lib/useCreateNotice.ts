import { createNoticeForm } from '@/shared/api/createNoticeForm';
import { type Notice } from '@/entities/notice/model/types';

export const useCreateNotice = (
  setNotices: React.Dispatch<React.SetStateAction<Notice[]>>,
) => {
  const createNotice = (data: FormValues) => {
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
  };

  return { createNotice };
};
