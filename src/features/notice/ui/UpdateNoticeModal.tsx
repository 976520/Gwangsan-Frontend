'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useForm, Controller } from 'react-hook-form';
import { RoleSelect } from '@/shared/ui/RoleSelect';
import { PlaceSelect } from '@/shared/ui/PlaceSelect';
import FileUpload from '@/shared/ui/FileUpload';
import { FormValues, UpdateFormValues } from '../model/NoticeForm';
import { useEffect } from 'react';

interface EditNoticeModalProps {
  open: boolean;
  onClose: () => void;
  initialNotice: UpdateFormValues;
  onSave: (updatedNotice: FormValues) => void;
}

export function UpdateNoticeModal({
  open,
  onClose,
  initialNotice,
  onSave,
}: EditNoticeModalProps) {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: initialNotice,
  });

  useEffect(() => {
    reset(initialNotice);
  }, [initialNotice, reset]);

  const onSubmit = (data: FormValues) => {
    onSave(data);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>공지사항 수정</DialogTitle>
          <DialogDescription>공지사항 정보를 수정합니다.</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="edit-title">제목</Label>
            <Input
              id="edit-title"
              {...register('title', { required: '제목은 필수입니다.' })}
            />
            {errors.title && (
              <p className="text-sm text-red-500">{errors.title.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="edit-content">내용</Label>
            <Textarea
              id="edit-content"
              className="min-h-[120px]"
              {...register('content', { required: '내용은 필수입니다.' })}
            />
            {errors.content && (
              <p className="text-sm text-red-500">{errors.content.message}</p>
            )}
          </div>

          <div>
            <Label>대상 역할</Label>
            <Controller
              name="role"
              control={control}
              rules={{ required: '대상 역할은 필수입니다.' }}
              render={({ field }) => (
                <RoleSelect value={field.value} onChange={field.onChange} />
              )}
            />
            {errors.role && (
              <p className="text-sm text-red-500">{errors.role.message}</p>
            )}
          </div>

          <div>
            <Label>지역</Label>
            <Controller
              name="placeName"
              control={control}
              rules={{ required: '지역은 필수입니다.' }}
              render={({ field }) => (
                <PlaceSelect value={field.value} onChange={field.onChange} />
              )}
            />
            {errors.placeName && (
              <p className="text-sm text-red-500">{errors.placeName.message}</p>
            )}
          </div>

          <div>
            <Label>첨부 이미지</Label>
            <FileUpload id="edit-images" {...register('images')} />
          </div>

          <DialogFooter className="gap-2">
            <Button type="button" variant="outline" onClick={onClose}>
              취소
            </Button>
            <Button type="submit">수정 완료</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
