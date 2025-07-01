import { useState } from 'react';
import { Notice } from '@/entities/notice/model/types';
import { FormValues } from './NoticeForm';

export function useNotice(onSubmit: (data: FormValues) => void) {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (file: File | null) => {
    setFiles((prev) => (file ? [file, ...prev] : prev));
  };

  const handleSubmit = (formData: FormData) => {
    onSubmit({
      title: formData.get('title') as string,
      content: formData.get('content') as string,
      role: formData.get('role') as string,
      images: files,
    });
  };

  return {
    files,
    handleFileChange,
    handleSubmit,
  };
}
