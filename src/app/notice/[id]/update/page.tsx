'use client';

import { useParams, useRouter } from 'next/navigation';
import UpdateNoticeView from '@/views/updateNoticeView/ui';
import { useNotice } from '@/features/notice/lib/useNotice';
import { useNoticeDetailQuery } from '@/features/notice/lib/useNoticeDetailQuery';
import { FormValues } from '@/features/notice/model/NoticeForm';

export default function Update() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  const { updateNotice } = useNotice();
  const { data, isPending } = useNoticeDetailQuery(id);

  const onSubmit = async (data: FormValues) => {
    await updateNotice(id, data);
    router.push('/notice');
  };

  return <UpdateNoticeView updateNotice={onSubmit} initialForm={data} />;
}
