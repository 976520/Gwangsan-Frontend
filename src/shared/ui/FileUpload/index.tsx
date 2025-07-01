'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';
import React, { ComponentProps, useRef } from 'react';

export default function FileUpload({
  ...props
}: ComponentProps<'input'> | { id: string }) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  return (
    <div>
      <div className="mt-1 flex items-center space-x-2">
        <Input
          id={props.id}
          ref={inputRef}
          type="file"
          accept="image/*"
          {...props}
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
