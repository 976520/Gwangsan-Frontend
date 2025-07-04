// FileUpload.tsx
'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';
import React, { useRef } from 'react';

interface FileUploadProps {
  onChange: (files: File[]) => void;
  onBlur?: () => void;
  value?: File[];
  name?: string;
  id?: string;
}

export default function FileUpload({
  onChange,
  onBlur,
  name,
  id,
}: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    onChange(files);
  };

  return (
    <div className="mt-1 flex items-center space-x-2">
      <Input
        id={id}
        ref={inputRef}
        type="file"
        name={name}
        multiple
        accept="image/*"
        className="hidden"
        onChange={handleChange}
        onBlur={onBlur}
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
  );
}
