import { useEffect, useState } from 'react';
import type { Notice } from '@/entities/notice/model/types';

export default function useNoticeForm(initNotice?: Partial<Notice>) {
  const [form, setForm] = useState<Notice>({
    id: 0,
    title: '',
    content: '',
    role: '',
    images: [],
    author: '',
    date: '',
    views: 0,
    ...initNotice,
  });
  return { form, setForm };
}
