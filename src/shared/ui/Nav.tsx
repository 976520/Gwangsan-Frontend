'use client';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';
import Bell from '../asset/svg/Bell';
import Users from '../asset/svg/Users';
import FileText from '../asset/svg/FileText';

type Nav = 'member' | 'notice' | 'bell';

export default function Nav() {
  const [nav, setNav] = useState<Nav>('member');

  return (
    <Tabs value={nav} onValueChange={(value) => setNav(value as Nav)}>
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="member" className="flex items-center space-x-2">
          <Users />
          <span>회원관리</span>
        </TabsTrigger>
        <TabsTrigger value="notice" className="flex items-center space-x-2">
          <FileText />
          <span>공지사항</span>
        </TabsTrigger>
        <TabsTrigger value="bell" className="flex items-center space-x-2">
          <Bell />
          <span>알림</span>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
