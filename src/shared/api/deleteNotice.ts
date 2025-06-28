import { instance } from "../lib/axios"

export const deleteNotice = async (id: number) => {
    try {
        await instance.delete(`/api/post/${id.toString()}`)
    } catch (error) {
        console.error("공지사항 삭제 실패:", error)
    }
}
