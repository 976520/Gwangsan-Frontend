'use client';

import React from 'react';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Phone, Lock, MessageSquare } from 'lucide-react';

export default function SignupView() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-center text-2xl font-bold">
            회원가입
          </CardTitle>
          <CardDescription className="text-center">
            전화번호로 새 계정을 만드세요
          </CardDescription>
        </CardHeader>
        <form>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="phone">전화번호</Label>
              <div className="flex space-x-2">
                <div className="relative flex-1">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="010-1234-5678"
                    className="pl-10"
                    maxLength={13}
                    required
                  />
                </div>
                <Button
                  type="button"
                  variant="outline"
                  className="whitespace-nowrap"
                >
                  인증번호
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="verificationCode">인증번호</Label>
              <div className="flex space-x-2">
                <div className="relative flex-1">
                  <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="verificationCode"
                    name="verificationCode"
                    type="text"
                    placeholder="6자리 인증번호"
                    className="pl-10"
                    maxLength={6}
                    required
                  />
                </div>
                <Button type="button">확인</Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">비밀번호</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="password"
                  name="password"
                  placeholder="비밀번호를 입력하세요 (8자 이상)"
                  className="pl-10 pr-10"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                ></button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">비밀번호 확인</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="비밀번호를 다시 입력하세요"
                  className="pl-10 pr-10"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                ></button>
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full">
              회원가입
            </Button>

            <div className="text-center text-sm">
              <span className="text-gray-600">이미 계정이 있으신가요? </span>
              <Link
                href="/login"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                로그인
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
