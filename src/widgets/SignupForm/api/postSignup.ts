import { instance } from '@/shared/lib/axios';
import { SignupForm } from '@/shared/model/authSchema';
import { AxiosError } from 'axios';
import { toast } from 'sonner';

type SignupFormWithoutVerificationCode = Omit<SignupForm, 'verificationCode'>;

export const postSignup = async (
  data: SignupFormWithoutVerificationCode,
): Promise<{ success: boolean; error: string }> => {
  try {
    await instance.post('/auth/signup', data);
    toast.success('회원가입에 성공했습니다.');
    return { success: true, error: '' };
  } catch (e) {
    if (e instanceof AxiosError) {
      return { success: false, error: e.message };
    }
    return { success: false, error: '알 수 없는 오류가 발생했습니다.' };
  }
};
