import { instance } from "@/shared/lib/axios"
import { Notice } from "@/entities/notice/model/types"

export const fetchNoticeById = async (id: string): Promise<Notice | null> => {
  try {
    const { data } = await instance.get(`/api/post/${id}`)
    return data;
  } catch (error) {
    console.error("공지사항 불러오기 실패:", error)
    return null;
  }
}
