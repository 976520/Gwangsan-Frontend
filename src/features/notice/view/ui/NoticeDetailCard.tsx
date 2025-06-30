'use client';

import { useRouter } from 'next/navigation';
import NoticeDetail from '@/shared/ui/NoticeDetail/page';
import { useNoticeDetail } from '../lib/useNoticeDetail';

export default function NoticeDetailCard({ id }: { id: string }) {
  const router = useRouter();

  const { notice, isLoading } = useNoticeDetail(id);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center text-lg">
        상세 페이지 불러오는 중...
      </div>
    );
  }
  if (!notice) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h2 className="mb-4 text-2xl font-semibold">
          공지사항을 찾을 수 없습니다
        </h2>
        <p className="mb-6 text-gray-500">
          삭제되었거나 존재하지 공지사항입니다.
        </p>
        <button
          onClick={() => router.back()}
          className="text-sm text-blue-600 hover:underline"
        >
          ← 돌아가기
        </button>
      </div>
    );
  }

  return (
    <div>
      <NoticeDetail notice={notice} onBack={() => router.back()} />
    </div>
  );
}
