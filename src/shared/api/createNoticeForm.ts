import { FormValues } from '@/features/notice/model/NoticeForm';
import { instance } from '../lib/axios';

export const createNoticeForm = async (data: FormValues) => {
  // 명세서 보고, 보내는 값 변경
  try {
    await instance.post(`/api/post`, data);
  } catch (error) {
    console.error('공지사항 생성 실패:', error);
  }
};
