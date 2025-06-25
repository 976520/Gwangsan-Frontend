'use client';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useEffect, useState } from 'react';
import Bell from '../asset/svg/Bell';
import Users from '../asset/svg/Users';
import FileText from '../asset/svg/FileText';
import { useRouter, usePathname } from 'next/navigation';

type Nav = 'member' | 'notice' | 'notification';

export default function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  const [nav, setNav] = useState<Nav>('member');

  useEffect(() => {
    setNav(pathname.slice(1) as Nav);
  }, [pathname]);

  return (
    <Tabs className='px-4' value={nav} onValueChange={(value) => setNav(value as Nav)}>
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger onClick={() => router.push("/member")} value="member" className="flex items-center space-x-2">
          <Users />
          <span>회원관리</span>
        </TabsTrigger>
        <TabsTrigger onClick={() => router.push("/notice")} value="notice" className="flex items-center space-x-2">
          <FileText />
          <span>공지사항</span>
        </TabsTrigger>
        <TabsTrigger onClick={() => router.push("/notification")} value="notification" className="flex items-center space-x-2">
          <Bell />
          <span>알림</span>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}