'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Phone, Lock, MessageSquare, User } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { DONG_LIST, PLACE_LIST } from '../model/locationType';
import { useActionState, useRef, useState } from 'react';
import { handleSignup } from '../lib/handleSignup';
import Specialty from '@/entities/signup/ui/Specialty';
import { phoneNumberSchema } from '@/shared/model/phoneNumberSchema';
import { toast } from 'sonner';

const initialValue = {
  phoneNumber: '',
  password: '',
  success: false,
  verificationCode: '',
  nickname: '',
  placeId: '',
  error: '' as '' | SignupError,
};

export default function SignupForm() {
  const [state, action] = useActionState(handleSignup, initialValue);
  const [codeSent, setCodeSent] = useState(false);
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const VerificationRef = useRef<HTMLInputElement>(null);

  const handleSendVerificationCode = () => {
    const phoneNumber = phoneInputRef.current?.value || '';
    const result = phoneNumberSchema.safeParse(phoneNumber);

    if (!result.success) {
      toast.error('올바른 형식으로 다시 입력해주세요');
      return;
    }

    setCodeSent(true);
  };
  return (
    <form action={action}>
      <CardContent className="space-y-4">
        <Label htmlFor="name">
          이름 <span className="text-red-500">*</span>
        </Label>
        <div className="relative">
          <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            name="name"
            placeholder="이름을 입력하세요"
            className="pl-10"
            disabled={Boolean(state.error && state.error.name)}
            required
          />
          <small className="text-red-500">
            {state.error && state.error.name}
          </small>
            
        </div>
        <Label htmlFor="nickname">
          닉네임 (한글만) <span className="text-red-500">*</span>
        </Label>
        <div className="relative">
          <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            name="nickname"
            placeholder="한글 닉네임을 입력하세요"
            className="pl-10"
            required
          />
          <small className="text-red-500">
            {state.error && state.error.nickname}
          </small>
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">전화번호</Label>
          <span className="text-red-500">*</span>
          <div className="flex space-x-2">
            <div className="relative flex-1">
              <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                ref={phoneInputRef}
                name="phoneNumber"
                type="tel"
                placeholder="010-1234-5678"
                className="pl-10"
                maxLength={13}
                required
              />
              <small className="text-red-500">
                {state.error && state.error.phoneNumber}
              </small>
            </div>
            <Button
              onClick={handleSendVerificationCode}
              className="whitespace-nowrap"
              disabled={codeSent}
            >
              {codeSent ? '전송 됨' : '인증번호'}
            </Button>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="dongId">
            동 선택 <span className="text-red-500">*</span>
          </Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="동을 선택하세요" />
            </SelectTrigger>
            <SelectContent>
              {DONG_LIST.map((dong, index) => (
                <SelectItem key={index} value={dong}>
                  {dong}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <small className="text-red-500">
            {state.error && state.error.dongId}
          </small>
        </div>
        <div className="space-y-2">
          <Label htmlFor="placeId">
            지점 <span className="text-red-500">*</span>
          </Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="지점을 선택하세요" />
            </SelectTrigger>
            <SelectContent>
              {PLACE_LIST.map((place, i) => (
                <SelectItem key={i} value={place}>
                  {place}
                </SelectItem>
              ))}
            </SelectContent>
              
          </Select>
          <small className="text-red-500">
            {state.error && state.error.placeId}
          </small>
        </div>
        <div className="space-y-2">
          <Label htmlFor="recommender">
            추천인 <span className="text-red-500">*</span>
          </Label>
          <Input
            name="recommender"
            type="text"
            placeholder="추천인을 입력하세요"
            required
          />
          <small className="text-red-500">
            {state.error && state.error.recommender}
          </small>
        </div>

        <div className="space-y-2">
          <Label htmlFor="verificationCode">인증번호</Label>
          <span className="text-red-500">*</span>
          <div className="flex space-x-2">
            <div className="relative flex-1">
              <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                ref={VerificationRef}
                name="verificationCode"
                placeholder="6자리 인증번호"
                className="pl-10"
                maxLength={6}
                minLength={6}
                required
              />
              <small className="text-red-500">
                {state.error && state.error.verificationCode}
              </small>
            </div>
            <Button type="button" className="whitespace-nowrap">
              확인
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">비밀번호</Label>
          <span className="text-red-500">*</span>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              name="password"
              placeholder="비밀번호를 입력하세요 (8자 이상)"
              className="pl-10 pr-10"
              type="password"
              minLength={8}
              required
              disabled={Boolean(state.error && state.error.password)}
            />
            <small className="text-red-500">
              {state.error && state.error.password}
            </small>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirmPassword">비밀번호 확인</Label>
          <span className="text-red-500">*</span>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              name="confirmPassword"
              minLength={8}
              placeholder="비밀번호를 다시 입력하세요"
              className="pl-10 pr-10"
              required
              type="password"
            />
            <small className="text-red-500">
              {state.error && state.error.confirmPassword}
            </small>
          </div>
        </div>

        <Specialty />
      </CardContent>

      <CardFooter className="flex flex-col space-y-4">
        <Button type="submit" className="w-full">
          회원가입
        </Button>

        <div className="text-center text-sm">
          <span className="text-gray-600">이미 계정이 있으신가요? </span>
          <Link
            href="/signin"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            로그인
          </Link>
        </div>
      </CardFooter>
    </form>
  );
}
