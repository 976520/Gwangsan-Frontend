'use client';

import NoticeDetailCard from '@/features/notice/view/ui/NoticeDetailCard';

export default function Page({ params }: { params: { id: string } }) {
  return <NoticeDetailCard id={params.id} />;
}
