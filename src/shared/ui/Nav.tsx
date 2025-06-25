'use client';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useCallback, useMemo } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Bell, FileText, Users } from '../asset/svg';

type Nav = 'member' | 'notice' | 'notification';

export default function Nav() {
  const pathname = usePathname();
  const router = useRouter();

  const currentTab = useMemo((): Nav => {
    if (pathname.startsWith('/member')) return 'member';
    if (pathname.startsWith('/notice')) return 'notice';
    if (pathname.startsWith('/notification')) return 'notification';
    return 'member';
  }, [pathname]);

  const handleChange = useCallback((value: string)=>{
    router.push("/" + value)
  }, [router])

  return (
    <Tabs className='px-4' value={currentTab} onValueChange={handleChange}>
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="member" className="flex items-center space-x-2">
          <Users />
          <span>회원관리</span>
        </TabsTrigger>
        <TabsTrigger  value="notice" className="flex items-center space-x-2">
          <FileText />
          <span>공지사항</span>
        </TabsTrigger>
        <TabsTrigger value="notification" className="flex items-center space-x-2">
          <Bell />
          <span>알림</span>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}