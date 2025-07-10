'use client';

import { type Notice } from '@/entities/notice/model/types';
import { CreateNoticeCard } from '@/features/notice/ui/CreateNoticeCard';
import NoticeCard from '@/features/notice/ui/NoticeCard';
import { useEffect, useState } from 'react';
import { useNotice } from '@/features/notice/lib/useNotice';

export default function Notice() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const { wrappedCreateNotice, refreshNotices, deleteNoticeById } =
    useNotice(setNotices);

  useEffect(() => {
    refreshNotices();
  }, [refreshNotices]);

  return (
    <div className="space-y-7 px-12 py-2">
      <CreateNoticeCard createNotice={wrappedCreateNotice} />
      <NoticeCard notices={notices} deleteNotice={deleteNoticeById} />
    </div>
  );
}
