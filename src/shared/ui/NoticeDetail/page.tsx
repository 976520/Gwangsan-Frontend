'use client'

import { BadgeSelect } from '../BadgeSelect';
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Calendar, Eye, User } from 'lucide-react'
import { Notice } from '@/entities/notice/model/types'

interface NoticeDetailProps {
  notice: Notice
  onBack: () => void
}

export default function NoticeDetail({ notice, onBack }: NoticeDetailProps) {
  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Button variant="ghost" onClick={onBack} className="p-0 h-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            목록으로
          </Button>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span className="flex items-center">
              <Calendar className="mr-1 h-4 w-4" />
              {notice.date}
            </span>
            <span className="flex items-center">
              <Eye className="mr-1 h-4 w-4" />
              조회 {notice.views}
            </span>
          </div>
        </div>
        <CardTitle className="text-3xl font-bold">{notice.title}</CardTitle>
        <div className="flex flex-wrap items-center gap-3 mt-3">
          <div className="flex items-center">
            <User className="mr-1 h-4 w-4 text-gray-500" />
            <span>{notice.author}</span>
          </div>
          <BadgeSelect role={notice.role}>{notice.role}</BadgeSelect>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-6">
          <div className="flex justify-center">
            {notice.images.map((image) => (
              <img
                key={image}
                src={image}
                alt={notice.title}
                className="rounded-lg max-h-[500px] object-contain"
              />
            )
            )}
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
  )
}
