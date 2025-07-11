import { useQuery } from '@tanstack/react-query';
import { fetchNoticeById } from '@/shared/api/fetchNoticeById';
import { mockData } from '@/shared/mock/notices';
export const useNoticeDetailQuery = (id: string) => {
  return useQuery({
    queryKey: ['noticeData', id],
    /*queryFn: async () => {
      const {
        title = '',
        content = '',
        role = '',
        placeName = '',
      } = (await fetchNoticeById(id)) || {};
      return { title, content, role, images: [], placeName };
    },*/
    queryFn: async () => {
      const notice = mockData.find((n) => n.id === Number(id));
      if (!notice) throw new Error('해당 공지사항을 찾을 수 없습니다.');

      const { title, content, role, placeName } = notice;
      return {
        id: notice.id,
        title,
        content,
        role,
        placeName,
        images: [],
      };
    },
  });
};
