"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/shared/ui/Button"
import { Edit, Trash2 } from "lucide-react"
import { Badge } from "@/shared/ui/Badge"
import { CreateNoticeCard } from "./CreateNoticeCard"

interface Notice {
  id: string
  title: string
  content: string
  role: string
  author: string
  date: string
  views: number
  image?: File | null
}

export function NoticeCard() {
  const [notices, setNotices] = useState<Notice[]>([
    {
      id: "1",
      title: "시스템 점검 안내",
      content: "2024년 12월 15일 시스템 점검 예정",
      role: "사무국",
      author: "관리자",
      date: "2024-12-10",
      views: 156,
    },
    {
      id: "2",
      title: "새로운 기능 업데이트",
      content: "채팅 기능이 추가되었습니다",
      role: "코디네이터",
      author: "김관리",
      date: "2024-12-08",
      views: 89,
    },
  ])

  const handleNoticeSubmit = (newNotice: Notice) => {
    setNotices([newNotice, ...notices])
  }

  return (
    <div  className="space-y-6 px-12">
      <CreateNoticeCard onSubmit={handleNoticeSubmit} />
      <Card>
        <CardHeader>
          <CardTitle>게시된 공지사항</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {notices.map((notice) => (
              <div key={notice.id} className="border rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">
                      <a href={`/notice/${notice.id}`} className="hover:text-blue-600 hover:underline">
                        {notice.title}
                      </a>
                    </h3>
                    <p className="text-gray-600 mt-1">{notice.content}</p>
                    <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                      <span>작성자: {notice.author}</span>
                      <Badge role={notice.role} />
                      <span>{notice.date}</span>
                      <span>조회수: {notice.views}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={`/notice/${notice.id}`}>상세보기</a>
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
