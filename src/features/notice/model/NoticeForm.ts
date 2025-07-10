import { FileValue } from '@/schemas/noticeSchema';
import { z } from 'zod';

const FormValuesSchema = z.object({
  title: z.string().min(1, '제목을 입력해주세요.'),
  content: z.string().min(1, '내용을 입력해주세요.'),
  role: z.string().min(1, '역할을 선택해주세요.'),
  placeName: z.string(),
  images: z.array(FileValue),
});

export type FormValues = z.infer<typeof FormValuesSchema>;
