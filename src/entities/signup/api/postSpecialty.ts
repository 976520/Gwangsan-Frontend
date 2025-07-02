import { instance } from '@/shared/lib/axios';
import { toast } from 'sonner';

export const postSpecialty = async (name: string) => {
  try {
    instance.post('/related-keyword', name);
  } catch (error) {
    toast.error('특기를 등록하는데 실패하였습니다');
  }
};
