'use client';

import { type Notice } from '@/entities/notice/model/types';
import { CreateNoticeCard } from '@/features/notice/ui/CreateNoticeCard';
import NoticeCard from '@/features/notice/ui/NoticeCard';
import { createNoticeForm } from '@/shared/api/createNoticeForm';
import { fetchNotices } from '@/shared/api/fetchNotices';
import { useEffect, useState } from 'react';
import { deleteNotice } from '@/shared/api/deleteNotice';
import { mockNotices } from '@/shared/mock/notices';
import { useCreateNotice } from '@/features/notice/lib/useCreateNotice';

export default function Notice() {
  const { createNotice, notices, setNotices } = useCreateNotice();

  useEffect(() => {
    const getNotices = async () => {
      const newNotices = await fetchNotices();
      setNotices(newNotices);
    };
    getNotices();

    // TODO 목데이터 나중에 지우기
    setNotices(mockNotices);
  }, [setNotices]);

  const deleteNoticeInList = (id: number) => {
    deleteNotice(id);
    setNotices((prev) => notices.filter((notice) => notice.id != id));
  };

  return (
    <div className="space-y-7 px-12 py-2">
      <CreateNoticeCard createNotice={createNotice} />
      <NoticeCard notices={notices} deleteNotice={deleteNoticeInList} />
    </div>
  );
}
