import { instance } from '@/shared/lib/axios';
import { SigninForm } from '@/shared/model/authSchema';
import { AxiosError } from 'axios';
import { setCookie } from 'cookies-next';
import { toast } from 'sonner';

export const postSignin = async (
  data: SigninForm,
): Promise<{ success: boolean; error: string }> => {
  try {
    const res = await instance.post('/admin/signin', data);
    setCookie('accessToken', res.data.accessToken, { maxAge: 60 * 60 * 24 });
    setCookie('refreshToken', res.data.refreshToken, {
      maxAge: 60 * 60 * 24 * 7,
    });
    toast.success('로그인에 성공했습니다.');
    return { success: true, error: '' };
  } catch (e) {
    if (e instanceof AxiosError) {
      toast.error(e.response?.data.message || '로그인에 실패했습니다.');
      return { success: false, error: e.message };
    }
    toast.error('알 수 없는 오류가 발생했습니다.');
    return { success: false, error: '알 수 없는 오류가 발생했습니다.' };
  }
};
