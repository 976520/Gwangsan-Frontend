import { SigninSchema } from '@/shared/model/authSchema';
import { postSignin } from '../api/postSignin';

export const handleSignin = async (
  prevState: {
    success: boolean;
    error: '' | { phoneNumber?: string[]; password?: string[] };
  },
  formData: FormData,
): Promise<{
  success: boolean;
  error: '' | { phoneNumber?: string[]; password?: string[] };
}> => {
  const value = {
    phoneNumber: formData.get('phoneNumber') as string,
    password: formData.get('password') as string,
  };

  const result = SigninSchema.safeParse(value);

  if (!result.success) {
    const fieldErrors = result.error.flatten().fieldErrors;
    return { ...prevState, success: false, error: fieldErrors };
  }

  const res = await postSignin(value);
  if (res.success) {
    return { ...prevState, success: true, error: '' };
  } else {
    return {
      ...prevState,
      success: false,
      error: '',
    };
  }
};
