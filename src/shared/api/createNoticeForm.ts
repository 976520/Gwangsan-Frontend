import { Notice } from '@/entities/notice/model/types';
import { instance } from '../lib/axios';

export const createNoticeForm = async (notice: Notice) => {
  // 명세서 보고, 보내는 값 변경
  try {
    await instance.post(`/api/post`, notice);
  } catch (error) {
    console.error('공지사항 생성 실패:', error);
  }
};
