'use client';

import { fetchNoticeById } from '@/shared/api/fetchNoticeById';
import { useState, useEffect, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { updateNoticeForm } from '@/shared/api/updateNoticeForm';
import UpdateNoticeView from '@/views/updateNoticeView/ui';
import { FormValues } from '@/features/notice/model/NoticeForm';

export default function Update() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<FormValues | null>(null);

  useEffect(() => {
    const fetchNotice = async () => {
      const data = await fetchNoticeById(id);
      setData({
        title: data?.title ?? '',
        content: data?.content ?? '',
        role: data?.role ?? '',
        images: [],
      });
    };
    fetchNotice();
  }, [id]);

  const updateNotice = useCallback(
    async (changedForm: FormValues) => {
      // TODO 수정하는 코드 작성
      const response = await updateNoticeForm(id, changedForm);
      if (response.status == 200) {
        router.push('/notice');
      }
    },
    [id, router],
  );

  const onBack = () => {
    router.push('/notice');
  };

  return <UpdateNoticeView updateNotice={updateNotice} initialForm={data} />;
}
