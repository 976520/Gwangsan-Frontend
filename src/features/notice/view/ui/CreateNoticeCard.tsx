'use client';

import { useState } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/shared/ui/Button';
import FileUpload from '@/shared/ui/FileUpload';
import { RoleSelect } from '@/shared/ui/Select';
import { Notice } from '@/entities/notice/model/types';
import Form from 'next/form';

interface CreateNoticeProps {
  createNotice: (notice: Notice, file: File[]) => void;
}

export function CreateNoticeCard({ createNotice }: CreateNoticeProps) {
  const [files, setFiles] = useState<File[]>([]);

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
    createNotice(newNotice, files);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>공지사항 작성</CardTitle>
        <CardDescription>
          새로운 공지사항을 작성하고 게시할 수 있습니다.
        </CardDescription>
      </CardHeader>
      <Form action={handleSubmit}>
        <CardContent className="space-y-4">
          <div>
            <Label>제목</Label>
            <Input name="title" placeholder="공지사항 제목을 입력하세요" />
          </div>

          <div>
            <Label>내용</Label>
            <Textarea name="content" placeholder="공지사항 내용을 입력하세요" />
          </div>

          <div>
            <Label>대상 역할</Label>
            <RoleSelect name="role" />
          </div>

          <div>
            <Label>첨부 이미지</Label>
            <FileUpload
              id="notice-image"
              onChange={(file) => {
                setFiles((prev) => (file ? [file, ...prev] : [...prev]));
              }}
            />
          </div>

          <Button className="w-full" type="submit">
            공지사항 게시
          </Button>
        </CardContent>
      </Form>
    </Card>
  );
}
