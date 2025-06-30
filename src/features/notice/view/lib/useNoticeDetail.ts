import { useEffect, useState } from 'react';
import { type Notice } from '@/entities/notice/model/types';
// import { fetchNoticeById } from '@/shared/api/fetchNoticeById';
import { mockNotices } from '@/shared/mock/notices';

export const useNoticeDetail = (id: string) => {
  const [notice, setNotice] = useState<Notice | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        // 실제 API 통신은 생략하고, mock 데이터로 대체
        const fallback = mockNotices.find((p) => p.id.toString() === id);
        setNotice(fallback ?? null);
      } catch (e) {
        console.error('공지사항 불러오기 실패', e);
      } finally {
        setIsLoading(false);
      }
    };
    fetch();
  }, [id]);

  return { notice, isLoading };
};
