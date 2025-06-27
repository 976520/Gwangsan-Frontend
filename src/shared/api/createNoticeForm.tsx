import { Notice } from "@/entities/notice/model/types";
import { instance } from "../lib/axios";

export const createNoticeForm = async (notice: Notice) => {
    // 명세서 보고, 보내는 값 변경
    const { data } = await instance.post("/api/post", notice);
}