'use client';

import { fetchNoticeById } from '@/shared/api/fetchNoticeById';
import { useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { updateNoticeForm } from '@/shared/api/updateNoticeForm';
import UpdateNoticeView from '@/views/updateNoticeView/ui';
import { FormValues } from '@/features/notice/model/NoticeForm';
import { useQuery } from '@tanstack/react-query';

export default function Update() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();

  const { isPending, error, data } = useQuery({
    queryKey: ['noticeData'],
    queryFn: async () => {
      const {
        title = '',
        content = '',
        role = '',
      } = (await fetchNoticeById(id)) || {};
      return { title, content, role, images: [] };
    },
  });

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

  return (
    !isPending && (
      <UpdateNoticeView updateNotice={updateNotice} initialForm={data} />
    )
  );
}
