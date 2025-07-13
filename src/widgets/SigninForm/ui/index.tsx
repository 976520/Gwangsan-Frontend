'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Lock } from 'lucide-react';
import { handleSignin } from '../lib/handleSignin';
import { useActionState } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const initialValue = {
  nickname: '',
  password: '',
  success: false,
  error: '' as '' | { nickname?: string[]; password?: string[] },
};

export default function SigninForm() {
  const [state, action] = useActionState(handleSignin, initialValue);
  const router = useRouter();

  useEffect(() => {
    if (state.success) {
      router.push('/');
    }
  }, [state.success, router]);

  return (
    <form action={action}>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="nickname">별칭 (한글)</Label>
          <div className="relative">
            <Input
              id="nickname"
              name="nickname"
              placeholder="별칭을 입력하세요"
              maxLength={13}
              required
            />
            {state?.error && <small>{state.error.nickname}</small>}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">비밀번호</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="비밀번호를 입력하세요"
              className="pl-10 pr-10"
              required
            />
            {state?.error && <small>{state.error.password}</small>}
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col space-y-4">
        <Button type="submit" className="w-full">
          로그인
        </Button>

        <div className="text-center text-sm">
          <span className="text-gray-600">계정이 없으신가요? </span>
          <Link
            href="/signup"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            회원가입
          </Link>
        </div>
      </CardFooter>
    </form>
  );
}
