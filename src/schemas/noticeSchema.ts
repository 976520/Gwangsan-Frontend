import { z } from 'zod';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_MIME_TYPES = ['image/jpeg', 'image/png'];

export const FileSchema = z
  .instanceof(File)
  .refine((file) => file.size <= MAX_FILE_SIZE, {
    message: '파일 크기는 5MB 이하여야 합니다.',
  })
  .refine((file) => ACCEPTED_MIME_TYPES.includes(file.type), {
    message: '지원되지 않는 파일 형식입니다.',
  });
