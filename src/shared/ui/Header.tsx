'use client';

import Link from 'next/link';
import Bell from '../asset/svg/Bell';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Shield } from 'lucide-react';

// TODO 실제 인증에서 받아야 함
const currentAdmin = {
  id: 1,
  name: '김관리자',
  email: 'admin@example.com',
  role: '사무국',
  avatar: '/placeholder.svg?height=32&width=32',
};

const getRoleBadgeColor = (role: string) => {
  switch (role) {
    case '사무국':
      return 'bg-green-100 text-green-800';
    case '코디네이터':
      return 'bg-blue-100 text-blue-800';
    case '일반 계정':
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-white p-4">
      <h1 className="text-2xl font-bold text-gray-900">시민 화폐 광산</h1>
      <div className="flex items-center space-x-4">
        <Badge
          className={`flex items-center ${getRoleBadgeColor(currentAdmin.role)}`}
          variant="secondary"
        >
          <Shield className="mr-1 h-3 w-3" />
          {currentAdmin.role}
        </Badge>
        <Link href="/notification">
          <Badge variant="outline" className="flex items-center space-x-1">
            <Bell />
            <span>4</span>
          </Badge>
        </Link>
      </div>
    </header>
  );

}
