'use server';

import { SignupSchema } from '@/shared/model/authSchema';
import { postSignup } from '../api/postSignup';
import { redirect } from 'next/navigation';

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
    nickname: formData.get('nickname') as string,
    placeName: formData.get('placeName') as string,
    dongName: formData.get('dongName') as string,
    specialties: (formData.get('specialties') as string).split(','),
    name: formData.get('name') as string,
    recommender: formData.get('recommender') as string,
    confirmPassword: formData.get('confirmPassword') as string,
    description: formData.get('description') as string,
  };

  const result = SignupSchema.safeParse(value);

  if (!result.success) {
    const fieldErrors = result.error.flatten().fieldErrors;
    return { ...prevState, success: false, error: fieldErrors };
  }

  const res = await postSignup(value);
  if (res.success) {
    redirect('/login');
  } else {
    return {
      ...prevState,
      success: false,
      error: '',
    };
  }
};
