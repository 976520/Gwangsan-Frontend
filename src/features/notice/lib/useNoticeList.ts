import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { toast } from 'sonner';
import { fetchNotices } from '@/shared/api/fetchNotices';

export const useNoticeList = () => {
  return useQuery({
    queryKey: ['noticeList'],
    queryFn: async () => {
      const notices = await fetchNotices();
      try {
        return notices;
      } catch (e) {
        toast.error('공지사항을 불러오지 못했어요');
        throw e;
      }
    },
  });
};
