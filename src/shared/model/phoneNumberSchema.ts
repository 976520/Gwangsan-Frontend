import { z } from 'zod';

export const phoneNumberSchema = z
  .string()
  .trim()
  .transform((val) => val.replace(/[^\d-]/g, ''))
  .refine((val) => /^01[016789]-?\d{3,4}-?\d{4}$/.test(val), {
    message: '유효한 휴대폰 번호 형식이 아닙니다.',
  });
