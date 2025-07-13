'use client';

import { type Notice } from '@/entities/notice/model/types';
import { CreateNoticeCard } from '@/features/notice/ui/CreateNoticeCard';
import NoticeCard from '@/features/notice/ui/NoticeCard';
import { useNotice } from '@/features/notice/lib/useNotice';
import { useNoticeDetailQuery } from '@/features/notice/lib/useNoticeDetailQuery';
import { useNoticeList } from '@/features/notice/lib/useNoticeList';

export default function Notice() {
  const { createNotice, deleteNoticeById } = useNotice();
  const { data: notices } = useNoticeList();

  return (
    <div className="space-y-7 px-12 py-2">
      <CreateNoticeCard createNotice={createNotice} />
      {notices != undefined && (
        <NoticeCard notices={notices} deleteNotice={deleteNoticeById} />
      )}
    </div>
  );
}
