'use client';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';
import React, { useRef } from 'react';

interface FileUploadProps {
  id: string;
  onChange: (file: File | null) => void;
}

export default function FileUpload({ id, onChange }: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    onChange(file);
  };

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  return (
    <div>
      <div className="mt-1 flex items-center space-x-2">
        <Input
          id={id}
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={handleChange} // MIME 타입만 체크하면 파일 내용 검증이 제대로 안될 것 같아요 라고 코멘트떠쒀
          multiple
        />
        <Button
          variant="outline"
          size="sm"
          type="button"
          onClick={handleButtonClick}
        >
          <Upload className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
