import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchNoticeById } from '@/shared/api/fetchNoticeById';
import { toast } from 'sonner';
import { Notice } from '@/entities/notice/model/types';

export const useNoticeDetailQuery = (id: string) => {
  return useSuspenseQuery({
    queryKey: ['noticeData', id],
    queryFn: async () => {
      const notice = await fetchNoticeById(id);
      try {
        return notice;
      } catch (e) {
        toast.error('공지사항을 불러오지 못했어요');
        throw e;
      }
    },
  });
};
