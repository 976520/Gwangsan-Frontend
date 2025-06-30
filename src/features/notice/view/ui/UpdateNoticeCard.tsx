'use client';

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import NoticeForm from './NoticeForm';
import { FormValues } from '../model/NoticeForm';

interface UpdateNoticeProps {
  updateNotice: (changedForm: FormValues) => void;
  initialForm: FormValues;
}

export function UpdateNoticeCard({
  updateNotice,
  initialForm,
}: UpdateNoticeProps) {
  const router = useRouter();

  const onSubmit = (data: FormValues) => {
    updateNotice(data);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>공지사항 수정</CardTitle>
        <CardDescription>공지사항을 수정할 수 있습니다.</CardDescription>
      </CardHeader>
      <NoticeForm handleNotice={onSubmit} initialNotice={initialForm} />
    </Card>
  );
}
