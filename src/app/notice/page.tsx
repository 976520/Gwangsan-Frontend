"use client"

import { type Notice } from "@/entities/notice/model/types";
import { CreateNoticeCard } from "@/features/notice/view/ui/CreateNoticeCard";
import NoticeCard from "@/features/notice/view/ui/NoticeCard";
import { createNoticeForm } from "@/shared/api/createNoticeForm";
import { fetchNotices } from "@/shared/api/fetchNotices";
import { useEffect, useState } from "react";

export default function Notice() {  
  const [notices, setNotices] = useState<Notice[]>([])

  useEffect(() => {
    const getNotices = async () => {
      const newNotices = await fetchNotices()
      setNotices(newNotices)
    }
    getNotices()
  }, [])

  const createNotice = (notice: Notice) => {
    createNoticeForm(notice)
    setNotices((prev) => [notice, ...prev])
  }

  return (
    <div className="py-2 px-12">
      <CreateNoticeCard createNotice={createNotice} />
      <NoticeCard notices={notices} />
    </div>
  )
}
  