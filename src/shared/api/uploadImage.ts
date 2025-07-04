import { UploadImageResponse } from '@/entities/notice/model/types';
import { instance } from '../lib/axios';
import { toast } from 'sonner';

export const uploadImages = async (
  files: File[],
): Promise<UploadImageResponse[]> => {
  try {
    const responses = await Promise.all(
      files.map(async (file) => {
        const { data } = await instance.postForm(
          `/api/image`,
          { file },
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          },
        );

        return {
          imageId: data.imageId,
          imageUrl: data.imageUrl,
        };
      }),
    );

    return responses;
  } catch (error) {
    toast.error(`${error}`);
    return []; // 실패 시 빈 배열 반환 (선택사항)
  }
};
