import { useState } from 'react';
import { Notice } from '@/entities/notice/model/types';

export function useNotice(onSubmit: (notice: Notice, file: File[]) => void) {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (file: File | null) => {
    setFiles((prev) => (file ? [file, ...prev] : prev));
  };

  const handleSubmit = (formData: FormData) => {
    const newNotice: Notice = {
      id: Date.now(),
      author: '새로운이름',
      date: new Date().toISOString().slice(0, 10),
      views: 0,
      title: formData.get('title') as string,
      content: formData.get('content') as string,
      role: formData.get('role') as string,
      images: [],
    };

    onSubmit(newNotice, files);
  };

  return {
    files,
    handleFileChange,
    handleSubmit,
  };
}
