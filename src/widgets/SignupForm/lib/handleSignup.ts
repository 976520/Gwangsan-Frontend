'use server';

import { SignupSchema } from '@/shared/model/authSchema';
import { toast } from 'sonner';
import { postSignup } from '../api/postSignup';

export const handleSignup = async (
  prevState: {
    success: boolean;
    error: '' | SignupError;
  },
  formData: FormData,
): Promise<{
  success: boolean;
  error: '' | SignupError;
}> => {
  const value = {
    phoneNumber: formData.get('phoneNumber') as string,
    password: formData.get('password') as string,
    verificationCode: formData.get('verificationCode') as string,
    nickname: formData.get('nickname') as string,
    placeId: Number(formData.get('placeId')) as number,
    dongId: Number(formData.get('dongId')) as number,
    specialties: formData.get('specialties') as string,
    name: formData.get('name') as string,
    recommender: formData.get('recommender') as string,
    confirmPassword: formData.get('confirmPassword') as string,
  };

  const result = SignupSchema.safeParse(value);

  if (!result.success) {
    const fieldErrors = result.error.flatten().fieldErrors;
    return { ...prevState, success: false, error: fieldErrors };
  }

  const res = await postSignup(value);
  if (res.success) {
    toast.success('회원가입에 성공했습니다.');
    return { ...prevState, success: true, error: '' };
  } else {
    toast.error(res.error || '회원가입에 실패했습니다.');
    return {
      ...prevState,
      success: false,
      error: '',
    };
  }
};
