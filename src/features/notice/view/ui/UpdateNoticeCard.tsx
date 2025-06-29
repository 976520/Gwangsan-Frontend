'use client';

import { useEffect, useState } from 'react';
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
import { useRouter } from 'next/navigation';
import Form from 'next/form';

interface UpdateNoticeProps {
  updateNotice: (id: number, notice: Partial<Notice>, files: File[]) => void;
  initNotice: Notice;
}

export function UpdateNoticeCard({
  updateNotice,
  initNotice,
}: UpdateNoticeProps) {
  const router = useRouter();
  const [files, setFiles] = useState<File[]>([]);
  const [form, setForm] = useState<Notice>({
    id: 0,
    title: '',
    content: '',
    role: '',
    images: [],
    author: '',
    date: '',
    views: 0,
  });

  useEffect(() => {
    setForm(initNotice);
  }, [initNotice]);

  const handleSubmit = (formData: FormData) => {
    updateNotice(initNotice.id, form, files);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>공지사항 수정</CardTitle>
        <CardDescription>공지사항을 수정할 수 있습니다.</CardDescription>
      </CardHeader>

      <Form action={handleSubmit}>
        <CardContent className="space-y-4">
          <div>
            <Label>제목</Label>
            <Input
              name="title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="공지사항 제목을 입력하세요"
            />
          </div>

          <div>
            <Label>내용</Label>
            <Textarea
              name="content"
              defaultValue={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              placeholder="공지사항 내용을 입력하세요"
            />
          </div>

          <div>
            <Label>대상 역할</Label>
            <RoleSelect
              defaultValue={form.role}
              onChange={(value) => setForm({ ...form, role: value })}
            />
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
