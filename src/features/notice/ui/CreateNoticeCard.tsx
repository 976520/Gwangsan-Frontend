'use client';

import { useForm, Controller } from 'react-hook-form';
import { useNotice } from '../model/useNotice';
import { Notice } from '@/entities/notice/model/types';
import NoticeForm from './NoticeForm';
import { Card, CardDescription, CardTitle } from '@/shared/ui/Card';
import { CardHeader } from '@/components/ui/card';
import { FormValues } from '../model/NoticeForm';
import { Dispatch, SetStateAction } from 'react';
import { useCreateNotice } from '../lib/useCreateNotice';

interface CreateNoticeProps {
  // createNotice: (data: FormValues) => void;
  action: Dispatch<SetStateAction<Notice[]>>;
}

export function CreateNoticeCard({ action }: CreateNoticeProps) {
  const { createNotice } = useCreateNotice(action);

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
