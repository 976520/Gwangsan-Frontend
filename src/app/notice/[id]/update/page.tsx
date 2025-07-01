'use client';

import { fetchNoticeById } from '@/shared/api/fetchNoticeById';
import { useState, useEffect, useCallback } from 'react';
import type { Notice } from '@/entities/notice/model/types';
import { UpdateNoticeCard } from '@/features/notice/ui/UpdateNoticeCard';
import { useRouter } from 'next/navigation';
import { mockNotices } from '@/shared/mock/notices';
import { instance } from '@/shared/lib/axios';
import { updateNoticeForm } from '@/shared/api/updateNoticeForm';
import UpdateNoticeView from '@/views/updateNoticeView/ui';
import { FormValues } from '@/features/notice/model/NoticeForm';

export default function Update({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const [data, setData] = useState<FormValues | null>(null);
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    const fetchId = async () => {
      const { id } = await params;
      setId(id);
    };
    fetchId();
  }, [params]);

  useEffect(() => {
    const fetchNotice = async () => {
      // const data = await fetchNoticeById(id);
      // setNotice(data);
      const mock = mockNotices.find((p) => p.id.toString() == id);
      const data: FormValues = {
        title: mock?.title ?? '',
        content: mock?.content ?? '',
        role: mock?.role ?? '',
        images: [],
      };

      mock && setData(data);
    };
    fetchNotice();
  }, [id]);

  const updateNotice = useCallback(
    async (changedForm: FormValues) => {
      if (id) {
        // TODO 수정하는 코드 작성
        const response = await updateNoticeForm(id, changedForm);
        if (response.status == 200) {
          router.push('/notice');
        }
      }
    },
    [id, router],
  );

  const onBack = () => {
    router.push('/notice');
  };

  return <UpdateNoticeView updateNotice={updateNotice} initialForm={data} />;
}
