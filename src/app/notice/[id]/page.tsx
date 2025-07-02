'use client';

import NoticeDetailCard from '@/features/notice/ui/NoticeDetailCard';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Page() {
  const { id } = useParams<{ id: string }>();

  return <NoticeDetailCard id={id} />;
}
