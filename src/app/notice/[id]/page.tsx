'use client';

import NoticeDetailCard from '@/features/notice/ui/NoticeDetailCard';
import { useEffect, useState } from 'react';

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    const fetchId = async () => {
      const { id } = await params;
      setId(id);
    };
    fetchId();
  }, [params]);

  return <div>{id != null && <NoticeDetailCard id={id} />}</div>;
}
