"use client"

import { fetchNoticeById } from "@/shared/api/fetchNoticeById"
import { useState, useEffect } from "react"
import type { Notice } from "@/entities/notice/model/types"
import NoticeDetail from "@/shared/ui/NoticeDetail/page"
import { useRouter } from "next/navigation"

export default function Page(params: Promise<{ id: string }>) {
  const router = useRouter()
  const [notice, setNotice] = useState<Notice | null>(null)

  useEffect(() => {
    const fetchNotice = async () => {
      const { id } = await params
      const data = await fetchNoticeById(id);
      setNotice(data)
    }
    fetchNotice();
  }, [])

  const onBack = () => {
    router.push('/notice')
  }

  return (
    <div>
      {
        notice != null ? (
          <NoticeDetail notice={notice} onBack={onBack} />
        ) : (
          <div>
            {/* <p>로딩중...</p> */}
            <NoticeDetail
              notice={{
                id: 1,
                title: "시스템 점검 안내",
                content:
                  "안녕하세요, 회원 여러분.\n\n2024년 12월 15일 오전 2시부터 오전 6시까지 시스템 점검이 예정되어 있습니다. 해당 시간 동안에는 서비스 이용이 제한될 수 있으니 양해 부탁드립니다.\n\n점검 내용:\n1. 서버 안정화 작업\n2. 보안 업데이트 적용\n3. 새로운 기능 배포 준비\n\n문의사항이 있으시면 고객센터로 연락 주시기 바랍니다.\n\n감사합니다.",
                author: "관리자",
                role: "사무국",
                date: "2024-12-10",
                views: 156,
                images: ["/placeholder.svg?height=400&width=800"],
              }} 
              onBack={onBack}
            />
          </div>
        )
      }
    </div>

  )
}
