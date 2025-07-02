import { instance } from '@/shared/lib/axios';
import { toast } from 'sonner';

export const getSpecialty = async (): Promise<string[]> => {
  try {
    const res = await instance.get('/related-keyword');
    return res.data.length === 0 ? [] : res.data;
  } catch (error) {
    toast.error('특기를 불러오는데 실패하였습니다');
    throw error;
  }
};
