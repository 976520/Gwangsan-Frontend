import { instance } from '@/shared/lib/axios';

export const checkVerificationCode = async (
  code: string,
  phoneNumber: string,
) => {
  try {
    return instance.post('/sms/verify', {
      code,
      phoneNumber,
    });
  } catch (error) {
    throw error;
  }
};
