"use client"

import { useState } from "react"
import { CreateNoticeCard } from "./CreateNoticeCard"
import ListItem from "@/shared/ui/ListItem"
import { Notice } from "@/entities/notice/model/types"
interface NoticeListProps {
  notices: Notice[]
}

export function NoticeCard() {
  const [notices, setNotices] = useState<Notice[]>([
  ])

  const handleNoticeSubmit = (newNotice: Notice) => {
    setNotices([newNotice, ...notices])
  }

  return (
    <div className="space-y-6 px-12">
       <CreateNoticeCard onSubmit={handleNoticeSubmit} />
      <ListItem notices={notices}/>
    </div>
  )
}
