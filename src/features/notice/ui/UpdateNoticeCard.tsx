'use client';

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import { UpdateNoticeModal } from './UpdateNoticeModal';
import { FormValues, UpdateFormValues } from '../model/NoticeForm';
import { useState } from 'react';

interface UpdateNoticeProps {
  updateNotice: (changedForm: FormValues) => void;
  initialForm: UpdateFormValues;
}

export function UpdateNoticeCard({
  updateNotice,
  initialForm,
}: UpdateNoticeProps) {
  const router = useRouter();
  const [editingNotice, setEditingNotice] = useState<UpdateFormValues | null>(
    initialForm,
  );

  const onSubmit = (data: FormValues) => {
    updateNotice(data);
    router.push('/notice');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>공지사항 수정</CardTitle>
        <CardDescription>공지사항을 수정할 수 있습니다.</CardDescription>
      </CardHeader>

      {editingNotice && (
        <UpdateNoticeModal
          open={true}
          onClose={() => setEditingNotice(null)}
          initialNotice={editingNotice}
          onSave={onSubmit}
        />
      )}
    </Card>
  );
}
