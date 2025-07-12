import { instance } from '@/shared/lib/axios';
import { AxiosError } from 'axios';
import { toast } from 'sonner';

export const postPhoneNumber = async (phoneNumber: string) => {
  try {
    await instance.post('/sms', {
      phoneNumber,
    });
    toast.success('인증번호가 전송되었습니다.');
  } catch (error) {
    if (error instanceof AxiosError) {
      toast.error(
        error.status === 409
          ? '이미 가입된 번호입니다.'
          : '인증번호 전송에 실패했습니다.',
      );
    }
  }
};
