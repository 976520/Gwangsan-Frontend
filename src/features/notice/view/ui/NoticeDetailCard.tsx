'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import NoticeDetail from '@/shared/ui/NoticeDetail/page'
import { Notice } from '@/entities/notice/model/types'

export default function NoticeDetailCard({ notice }: { notice: Notice | null }) {
  const router = useRouter()

  if (!notice) {
    return (
      <div className="flex items-center justify-center min-h-screen text-lg">불러오는 중...</div>
    )
  }

  if (!notice) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h2 className="text-2xl font-semibold mb-4">공지사항을 찾을 수 없습니다</h2>
        <p className="text-gray-500 mb-6">삭제되었거나 존재하지 않는 공지사항입니다.</p>
        <button
          onClick={() => router.back()}
          className="text-blue-600 hover:underline text-sm"
        >
          ← 돌아가기
        </button>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-10">
      <NoticeDetail notice={notice} onBack={() => router.back()} />
    </div>
  )
}
