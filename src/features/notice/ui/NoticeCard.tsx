import { Edit, Trash2 } from 'lucide-react';
import { Button } from '@/shared/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/Card';
import { BadgeSelect } from '@/shared/ui/BadgeSelect';
import { Notice } from '@/entities/notice/model/types';
import { useRouter } from 'next/navigation';
import dayjs from 'dayjs';
import { Badge } from '@/components/ui/badge';
interface NoticeListProps {
  notices: Notice[];
  deleteNotice: (id: number) => void;
}

export default function NoticeCard({ notices, deleteNotice }: NoticeListProps) {
  const router = useRouter();

  const handleUpdate = (id: number) => {
    router.push(`/notice/${id}/update`);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>게시된 공지사항</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {notices.map((notice) => (
            <div key={notice.id} className="rounded-lg border p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">
                    <a
                      href={`/notice/${notice.id}`}
                      className="hover:text-blue-600 hover:underline"
                    >
                      {notice.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-gray-600">{notice.content}</p>
                  <div className="mt-3 flex items-center space-x-4 text-sm text-gray-500">
                    <BadgeSelect role={notice.role} />
                    <Badge variant="outline">{notice.placeName}</Badge>
                    <span>
                      {dayjs(notice.createdAt).format('YYYY년 MM월 DD일')}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={`/notice/${notice.id}`}>상세보기</a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      handleUpdate(notice.id);
                    }}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      deleteNotice(notice.id);
                    }}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
