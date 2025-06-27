import { Edit, Trash2 } from "lucide-react"
import { Button } from "@/shared/ui/Button"
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/Card"
import { Badge } from "@/shared/ui/Badge"
import { Notice } from "@/entities/notice/model/types"

interface NoticeListProps {
  notices: Notice[]
}

export default function ListItem({ notices }: NoticeListProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>게시된 공지사항</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {notices.map((notice) => (
            <div key={notice.id} className="border rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">
                    <a
                      href={`/notice/${notice.id}`}
                      className="hover:text-blue-600 hover:underline"
                    >
                      {notice.title}
                    </a>
                  </h3>
                  <p className="text-gray-600 mt-1">{notice.content}</p>
                  <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                    <span>작성자: {notice.author}</span>
                    <Badge role={notice.role} /> 
                    <span>{notice.date}</span>
                    <span>조회수: {notice.views}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={`/notice/${notice.id}`}>상세보기</a>
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
