'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React, { useCallback, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { useGetSpecialty } from '../model/useGetSpecialty';

export default function Specialty() {
  const [showSpecialtiesDropdown, setShowSpecialtiesDropdown] =
    useState<boolean>();
  const [value, setValue] = useState('');
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
  const { data } = useGetSpecialty();

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const currentValue = e.currentTarget.value.trim();
        if (!currentValue) return;
        setSelectedSpecialties((prev) => {
          if (!prev.includes(currentValue)) {
            return [...prev, currentValue];
          }
          return prev;
        });
        setValue('');
      }
    },
    [],
  );

  const handleDelete = useCallback((value: string) => {
    setSelectedSpecialties((prev) => prev.filter((item) => item !== value));
  }, []);

  const handleAdd = useCallback((value: string) => {
    setSelectedSpecialties((prev) => {
      if (!prev.includes(value)) {
        return [...prev, value];
      }
      return prev;
    });
    setValue('');
  }, []);

  return (
    <div className="specialties-container relative space-y-2">
      <Label htmlFor="specialties">
        전문분야 <span className="text-red-500">*</span>
      </Label>

      {selectedSpecialties.length > 0 && (
        <div className="flex flex-wrap gap-2 rounded-md border bg-gray-50 p-2">
          {selectedSpecialties.map((v, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="flex items-center gap-1"
            >
              {v}
              <button
                type="button"
                onClick={() => handleDelete(v)}
                className="ml-1 text-gray-500 hover:text-red-500"
              >
                ×
              </button>
            </Badge>
          ))}
        </div>
      )}

      <Input
        type="text"
        placeholder="전문분야를 검색하거나 입력하세요"
        value={value}
        onChange={handleChange}
        onFocus={() => setShowSpecialtiesDropdown(true)}
        onKeyDown={handleKeyDown}
      />

      {showSpecialtiesDropdown && (
        <div className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border border-gray-300 bg-white shadow-lg">
          {data &&
          data.length > 0 &&
          data.filter((v) => v.name.includes(value)).length > 0 ? (
            data
              .filter((v) => v.name.includes(value))
              .map((specialty, index) => (
                <div
                  key={index}
                  className="cursor-pointer border-b border-gray-100 px-4 py-2 last:border-b-0 hover:bg-gray-100"
                >
                  {specialty.name}
                </div>
              ))
          ) : value.trim() ? (
            <div
              className="cursor-pointer bg-blue-50 px-4 py-2 text-gray-500 hover:bg-blue-100"
              onClick={() => handleAdd(value.trim())}
            >
              <span className="font-medium text-blue-600">
                &quot;{value.trim()}&quot;
              </span>{' '}
              새로 추가
            </div>
          ) : (
            <div className="px-4 py-2 text-gray-400">검색 결과가 없습니다</div>
          )}
        </div>
      )}

      <p className="text-xs text-gray-500">
        Enter 키를 누르거나 목록에서 선택하여 전문분야를 추가하세요
      </p>
      <input type="hidden" name="specialties" value={selectedSpecialties} />
    </div>
  );
}
