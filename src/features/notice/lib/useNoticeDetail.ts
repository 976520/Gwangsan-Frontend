import { useEffect, useState } from 'react';
import { type Notice } from '@/entities/notice/model/types';
import { fetchNoticeById } from '@/shared/api/fetchNoticeById';
import { toast } from 'sonner';

export const useNoticeDetail = (id: string) => {
  const [notice, setNotice] = useState<Notice>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await fetchNoticeById(id);
        setNotice(data);
      } catch (e) {
        toast.error(`${e}`);
      } finally {
        setIsLoading(false);
      }
    };
    fetch();
  }, [id]);

  return { notice, isLoading };
};
