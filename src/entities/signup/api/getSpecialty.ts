import { instance } from '@/shared/lib/axios';
import { toast } from 'sonner';

export const getSpecialty = async (): Promise<Specialty[]> => {
  try {
    return (await instance.get('/related-keyword')).data;
  } catch (error) {
    toast.error('특기를 불러오는데 실패하였습니다');
    return [];
  }
};
