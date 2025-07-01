'use client';

import NoticeForm from './NoticeForm';
import { Card, CardDescription, CardTitle } from '@/shared/ui/Card';
import { CardHeader } from '@/components/ui/card';
import { FormValues } from '../model/NoticeForm';

interface CreateNoticeProps {
  createNotice: (data: FormValues) => void;
}

export function CreateNoticeCard({ createNotice }: CreateNoticeProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>공지사항 작성</CardTitle>
        <CardDescription>
          새로운 공지사항을 작성하고 게시할 수 있습니다.
        </CardDescription>
      </CardHeader>
      <NoticeForm handleNotice={createNotice} />
    </Card>
  );
}
