'use client';

import { type Notice } from '@/entities/notice/model/types';
import { CreateNoticeCard } from '@/features/notice/ui/CreateNoticeCard';
import NoticeCard from '@/features/notice/ui/NoticeCard';
import { fetchNotices } from '@/shared/api/fetchNotices';
import { useCallback, useEffect, useState } from 'react';
import { deleteNotice } from '@/shared/api/deleteNotice';
import { FormValues } from '@/features/notice/model/NoticeForm';
import { createNoticeForm } from '@/shared/api/createNoticeForm';

export default function Notice() {
  const [notices, setNotices] = useState<Notice[]>([]);

  useEffect(() => {
    refreshNotices();
  }, []);

  const createNotice = useCallback((data: FormValues) => {
    createNoticeForm(data);
    refreshNotices();
  }, []);

  const refreshNotices = async () => {
    const newNotices = await fetchNotices();
    setNotices(newNotices);
  };

  const deleteNoticeInList = (id: number) => {
    deleteNotice(id);
    setNotices((prev) => prev.filter((notice) => notice.id != id));
  };

  return (
    <div className="space-y-7 px-12 py-2">
      <CreateNoticeCard createNotice={createNotice} />
      <NoticeCard notices={notices} deleteNotice={deleteNoticeInList} />
    </div>
  );
}
