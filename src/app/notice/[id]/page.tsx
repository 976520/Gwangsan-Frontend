"use client"

import { fetchNoticeById } from "@/shared/api/fetchNoticeById"
import { useState, useEffect } from "react"
import type { Notice } from "@/entities/notice/model/types"
import NoticeDetail from "@/shared/ui/NoticeDetail/page"
import { useRouter } from "next/navigation"

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter()
  const [notice, setNotice] = useState<Notice | null>(null)

  const [mocks, setMocks] = useState<Notice[]>([
    {
      id: 1,
      title: 'Hello World',
      content: 'asdf',
      role: 'asdf',
      author: 'me',
      date: '2025-04-04',
      views: 0,
      images: ['/placeholder.svg']
    },
    {
      id: 2,
      title: 'Hello Worl2',
      content: 'asdf',
      role: 'asdf',
      author: 'me',
      date: '2025-04-04',
      views: 0,
      images: ['/example.svg']
    },
    {
      id: 3,
      title: 'Hello World 3',
      content: 'asdf',
      role: 'asdf',
      author: 'me',
      date: '2025-04-04',
      views: 0,
      images: ['/placeholder.svg']
    },
  ])

  useEffect(() => {
    const fetchNotice = async () => {
      const { id } = await params;
      // const data = await fetchNoticeById(id);
      // setNotice(data);
      const mock = mocks.find((p) => p.id.toString() == id)
      mock && setNotice(mock)
    }
    fetchNotice();
  }, [mocks, params])

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

