"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/shared/ui/Button"
import { Select, SelectTrigger, SelectValue, SelectItem, SelectContent } from "@/shared/ui/Select"
import { Upload } from "lucide-react"
interface Props {
  onSubmit: (notice: any) => void
}

export function CreateNoticeCard({ onSubmit }: Props) {
  const [form, setForm] = useState({
    title: "",
    content: "",
    role: "",
    image: null as File | null,
  })

  const handleSubmit = () => {
    const newNotice = {
      ...form,
      id: Date.now().toString(),
      author: "관리자",
      date: new Date().toISOString().slice(0, 10),
      views: 0,
    }
    onSubmit(newNotice)
    setForm({ title: "", content: "", role: "", image: null }) 
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>공지사항 작성</CardTitle>
        <CardDescription>새로운 공지사항을 작성하고 게시할 수 있습니다.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label>제목</Label>
          <Input
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="공지사항 제목을 입력하세요"
          />
        </div>

        <div>
          <Label>내용</Label>
          <Textarea
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            placeholder="공지사항 내용을 입력하세요"
          />
        </div>

        <div>
          <Label>대상 역할</Label>
          <Select
            value={form.role}
            onValueChange={(value) => setForm({ ...form, role: value })}
          >
            <SelectTrigger><SelectValue placeholder="역할 선택" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="전체">전체</SelectItem>
              <SelectItem value="코디네이터">코디네이터</SelectItem>
              <SelectItem value="사무국">사무국</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>이미지</Label>
          <div className="flex items-center space-x-2">
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => setForm({ ...form, image: e.target.files?.[0] || null })}
          />
          <Button variant="outline" size="sm">
            <Upload className="h-5 w-5"/>
          </Button>
          </div>
        </div>

        <Button className="w-full" onClick={handleSubmit}>공지사항 게시</Button>
      </CardContent>
    </Card>
  )
}
