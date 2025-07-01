import { instance } from '@/shared/lib/axios';
import { SigninForm } from '@/shared/model/authSchema';
import { AxiosError } from 'axios';
import { toast } from 'sonner';

export const postSignin = async (
  data: SigninForm,
): Promise<{ success: boolean; error: string }> => {
  try {
    await instance.post('/admin/signin', data);
    return { success: true, error: '' };
  } catch (e) {
    if (e instanceof AxiosError) {
      return { success: false, error: e.message };
    }
    return { success: false, error: '알 수 없는 오류가 발생했습니다.' };
  }
};
