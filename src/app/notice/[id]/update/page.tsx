"use client"

import { fetchNoticeById } from "@/shared/api/fetchNoticeById"
import { useState, useEffect } from "react"
import type { Notice } from "@/entities/notice/model/types"
import NoticeDetail from "@/shared/ui/NoticeDetail/page"
import { useRouter } from "next/navigation"
import { mockNotices } from "@/shared/mock/notices"

export default function Update({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter()
  const [notice, setNotice] = useState<Notice | null>(null)

  useEffect(() => {
    const fetchNotice = async () => {
      const { id } = await params;
      // const data = await fetchNoticeById(id);
      // setNotice(data);
      const mock = mockNotices.find((p) => p.id.toString() == id)
      mock && setNotice(mock)
    }
    fetchNotice();
  }, [params])

  const onBack = () => {
    router.push('/notice')
  }

  return (
    <div>
      {
        notice ? (
          <NoticeDetail notice={notice} onBack={onBack} />
        ) : (
          <div>
            <p>로딩중...</p>
          </div>
        )

        
      }
    </div>

  )
}

