import { instance } from "../lib/axios";

export const fetchNotices = async () => {
    const { data } = await instance.get("/api/post");
    return data;
}