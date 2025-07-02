import { z } from 'zod';
import { phoneNumberSchema } from './phoneNumberSchema';

export const SigninSchema = z.object({
  phoneNumber: phoneNumberSchema,
  password: z.string().min(8, '비밀번호는 최소 8자리 이상이어야 합니다.'),
});

export const SignupSchema = SigninSchema.extend({
  verificationCode: z.string().length(6, '인증번호는 6자리여야 합니다.'),
  nickname: z.string().regex(/^[가-힣]+$/, '닉네임은 한글만 입력 가능합니다.'),
  placeId: z.number().int(),
  dongId: z.number().int(),
  specialties: z.string().array().min(1, '전문분야를 선택해주세요.'),
  name: z.string().min(1, '이름을 입력해주세요.'),
  recommender: z
    .string()
    .regex(/^[가-힣]+$/, '추천인의 닉네임을 입력해주세요.'),
  confirmPassword: z
    .string()
    .min(8, '비밀번호 확인은 최소 8자리 이상이어야 합니다.'),
}).refine((data) => data.password === data.confirmPassword, {
  message: '비밀번호가 일치하지 않습니다.',
  path: ['confirmPassword'],
});

export type SigninForm = z.infer<typeof SigninSchema>;
export type SignupForm = z.infer<typeof SignupSchema>;
