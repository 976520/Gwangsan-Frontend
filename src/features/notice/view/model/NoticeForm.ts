import { z } from 'zod';

const FormValuesSchema = z.object({
  title: z.string().min(1, '제목을 입력해주세요.'),
  content: z.string().min(1, '내용을 입력해주세요.'),
  role: z.string().min(1, '역할을 선택해주세요.'),
  images: z
    .array(z.instanceof(File), {
      required_error: '이미지를 하나 이상 업로드해주세요.',
      invalid_type_error: '유효한 이미지 파일이 아닙니다.',
    })
    .min(1, '이미지를 하나 이상 업로드해주세요.'), // 최소 1개 이상의 파일 필요
});

export type FormValues = z.infer<typeof FormValuesSchema>;
