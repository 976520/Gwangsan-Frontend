'use client';

import { BadgeSelect } from '../BadgeSelect';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowLeft, Calendar } from 'lucide-react';
import { Notice } from '@/entities/notice/model/types';
import Image from 'next/image';
import dayjs from 'dayjs';

interface NoticeDetailProps {
  notice: Notice;
  onBack: () => void;
}

export default function NoticeDetail({ notice, onBack }: NoticeDetailProps) {
  return (
    <Card className="mx-auto max-w-4xl">
      <CardHeader>
        <div className="mb-2 flex items-center justify-between">
          <Button variant="ghost" onClick={onBack} className="h-8 p-0">
            <ArrowLeft className="mr-2 h-4 w-4" />
            목록으로
          </Button>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span className="flex items-center">
              <Calendar className="mr-1 h-4 w-4" />
              {dayjs(notice.createdAt).format('YYYY년 MM월 DD일')}
            </span>
          </div>
        </div>
        <CardTitle className="text-3xl font-bold">{notice.title}</CardTitle>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <BadgeSelect role={notice.role}>{notice.role}</BadgeSelect>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-6">
          <div className="flex justify-center">
            {notice.images?.map((image) => (
              <Image
                key={image.imageId}
                src={image.imageUrl}
                alt={notice.title}
                width={800}
                height={500}
                className="h-auto max-h-[500px] w-auto rounded-lg object-contain"
              />
            ))}
          </div>

          <div className="prose prose-lg max-w-none whitespace-pre-wrap">
            {notice.content}
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between border-t pt-6">
        <Button variant="outline" onClick={onBack}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          목록으로
        </Button>
      </CardFooter>
    </Card>
  );
}
