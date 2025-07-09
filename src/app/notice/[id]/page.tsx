'use client';

import NoticeDetailCard from '@/features/notice/ui/NoticeDetailCard';
import { useParams } from 'next/navigation';

export default function Page() {
  const { id } = useParams<{ id: string }>();

  return <NoticeDetailCard id={id} />;
}
