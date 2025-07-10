import { Controller, useForm } from 'react-hook-form';
import { CardContent } from '@/components/ui/card';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RoleSelect } from '@/shared/ui/RoleSelect';
import { PlaceSelect } from '@/shared/ui/PlaceSelect';
import FileUpload from '@/shared/ui/FileUpload';
import { Button } from '@/components/ui/button';
import { FormValues } from '../model/NoticeForm';
import { useCallback } from 'react';

interface NoticeFormProps {
  handleNotice: (data: FormValues) => void;
  initialNotice?: FormValues;
}

export default function NoticeForm({
  handleNotice,
  initialNotice,
}: NoticeFormProps) {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      ...initialNotice,
    },
  });

  const onSubmit = useCallback(
    (data: FormValues) => {
      handleNotice(data);
      reset();
    },
    [handleNotice, reset],
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="title">제목</Label>
          <Input
            id="title"
            defaultValue={initialNotice?.title}
            placeholder="공지사항 제목을 입력하세요"
            {...register('title', { required: '제목은 필수입니다.' })}
          />
          {errors.title && (
            <p className="text-sm text-red-500">{errors.title.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="content">내용</Label>
          <Textarea
            id="content"
            defaultValue={initialNotice?.content}
            placeholder="공지사항 내용을 입력하세요"
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
            defaultValue={initialNotice?.role}
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
            defaultValue={initialNotice?.role}
            rules={{ required: '대상 구역은 필수입니다.' }}
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
          <FileUpload id="images" {...register('images')} />
        </div>

        <Button className="w-full" type="submit">
          공지사항 게시
        </Button>
      </CardContent>
    </form>
  );
}
