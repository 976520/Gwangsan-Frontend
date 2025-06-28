"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/shared/ui/Button"
import FileUpload from "@/shared/ui/FileUpload"
import { RoleSelect } from "@/shared/ui/Select"
import { Notice } from "@/entities/notice/model/types"

interface CreateNoticeProps {
  createNotice: (notice: Notice, file: File[]) => void
}

export function CreateNoticeCard({ createNotice }: CreateNoticeProps) {
  const [files, setFiles] = useState<File[]>([])
  const [form, setForm] = useState({
    title: "",
    content: "",
    role: "",
    images: [],
  })

  const handleSubmit = () => {
    const newNotice = {
      ...form,
      id: Date.now(),
      author: "새로운이름",
      date: new Date().toISOString().slice(0, 10),
      views: 0,
    }
    createNotice(newNotice, [])
    setForm({ title: "", content: "", role: "", images: [] })
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
          <RoleSelect
            value={form.role}
            onChange={(value) => setForm({ ...form, role: value })} 
            />
        </div>

        <div>
          <Label>첨부 이미지</Label>
          <FileUpload
            id="notice-image"
            onChange={(file) => {
              setFiles((prev) => file ? [file, ...prev] : [...prev])
            }}
            />
        </div>

        <Button className="w-full" onClick={handleSubmit}>공지사항 게시</Button>
      </CardContent>
    </Card>
  )
}
