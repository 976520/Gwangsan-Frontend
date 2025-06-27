'use client';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react'; 
import React from 'react';

interface FileUploadProps {
  label?: string;
  id: string;
  onChange: (file: File | null) => void;
}

export default function FileUpload({ label = '파일 업로드', id, onChange }: FileUploadProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    onChange(file);
  };

  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <div className="flex items-center space-x-2 mt-1">
        <Input
          id={id}
          type="file"
          accept="image/*"
          onChange={handleChange}
        />
        <Button variant="outline" size="sm" type="button">
          <Upload className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
