import { Notice } from "@/entities/notice/model/types";
import { instance } from "../lib/axios"

export const updateNoticeForm = async (id: number, notice: Partial<Notice>) => {
    const response = await instance.patch(`/api/post/${id}`, notice);
    return response;
}