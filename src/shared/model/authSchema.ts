import { z } from 'zod';

export const SigninSchema = z.object({
  phone: z.string(),
  password: z.string().min(8, '비밀번호는 최소 8자리 이상이어야 합니다.'),
});

export const SignupSchema = SigninSchema.extend({
  certificationCode: z.string().length(6, '인증번호는 6자리여야 합니다.'),
  confirmPassword: z
    .string()
    .min(8, '비밀번호 확인은 최소 8자리 이상이어야 합니다.'),
}).refine((data) => data.password === data.confirmPassword, {
  message: '비밀번호가 일치하지 않습니다.',
  path: ['confirmPassword'],
});

export type SigninForm = z.infer<typeof SigninSchema>;
export type SignupForm = z.infer<typeof SignupSchema>;
