import { Image } from '@/entities/notice/model/types';
import { instance } from '../lib/axios';

export const uploadImage = async (files: File[]): Promise<Image[]> => {
  try {
    const responses = await Promise.all(
      files.map(async (file) => {
        const { data } = await instance.postForm(
          `/image`,
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
  } catch (e) {
    throw e;
  }
};
