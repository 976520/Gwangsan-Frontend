"use client"

import { fetchNoticeById } from "@/shared/api/fetchNoticeById"
import { useState, useEffect } from "react"
import type { Notice } from "@/entities/notice/model/types"
import { UpdateNoticeCard } from "@/features/notice/view/ui/UpdateNoticeCard"
import { useRouter } from "next/navigation"
import { mockNotices } from "@/shared/mock/notices"
import { instance } from "@/shared/lib/axios"
import { updateNoticeForm } from "@/shared/api/updateNoticeForm"

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

  const updateNotice = async (id: number, notice: Partial<Notice>, files: File[]) => {
    // TODO 수정하는 코드 작성
    const response = await updateNoticeForm(id, notice)
    if(response.status == 200) {
        router.push('/notice');
    }
  }

  const onBack = () => {
    router.push('/notice')
  }

  return (
    <div className="py-2 px-12">
      {
        notice ? (
            <UpdateNoticeCard updateNotice={updateNotice} initNotice={notice} />
        ) : (
          <div>
            <p>로딩중...</p>
          </div>
        )
      }
    </div>

  )
}

